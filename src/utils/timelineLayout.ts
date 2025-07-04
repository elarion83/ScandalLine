import { Scandal } from '../types/scandal';

export interface ScandalPosition {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  date: Date;
}



export const CARD_WIDTH = 280;
export const CARD_HEIGHT = 180;
export const TIMELINE_HEIGHT = 3;
export const TIMELINE_Y = 120;
export const MIN_VERTICAL_SPACING = 40;
export const MIN_HORIZONTAL_SPACING = 40;
export const TRACK_HEIGHT = CARD_HEIGHT + MIN_VERTICAL_SPACING;
export const BASE_PIXELS_PER_YEAR = 150;


// Check if timeline needs scrolling (more than one affair)
export const needsScrolling = (scandals: Scandal[]): boolean => {
  return scandals.length > 1;
};



// Calculate optimized timeline width
export const calculateOptimizedTimelineWidth = (
  scandals: Scandal[],
  startYear: number,
  endYear: number,
  zoomLevel: number
): { width: number } => {
  if (scandals.length === 0) {
    return { 
      width: Math.max(800, window.innerWidth || 1200)
    };
  }

  if (scandals.length === 1) {
    // Single affair - minimal width, no scrolling needed
    return { 
      width: Math.max(800, window.innerWidth || 1200)
    };
  }

  // Use normal calculation
    const yearSpan = endYear - startYear;
  return { 
    width: Math.max(1400, yearSpan * BASE_PIXELS_PER_YEAR * zoomLevel)
  };
};

export const calculateTimelineWidth = (startYear: number, endYear: number, zoomLevel: number): number => {
  const yearSpan = endYear - startYear;
  return Math.max(1400, yearSpan * BASE_PIXELS_PER_YEAR * zoomLevel);
};

export const getXPositionForDate = (
  dateString: string,
  startYear: number,
  endYear: number,
  timelineWidth: number
): number => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthProgress = date.getMonth() / 12;
  const dayProgress = date.getDate() / 365;
  
  const exactYear = year + monthProgress + dayProgress;
  const yearProgress = (exactYear - startYear) / (endYear - startYear);
  
  return Math.max(CARD_WIDTH / 2, Math.min(timelineWidth - CARD_WIDTH / 2, yearProgress * timelineWidth));
};

// Calculate optimized positions
export const calculateOptimizedScandalPositions = (
  scandals: Scandal[]
): ScandalPosition[] => {
  if (scandals.length === 0) return [];
  
  if (scandals.length === 1) {
    // Single scandal - center it
    const scandal = scandals[0];
    const viewportWidth = window.innerWidth || 1200;
    return [{
      id: scandal.id,
      x: viewportWidth / 2 - CARD_WIDTH / 2,
      y: 200, // Center vertically in viewport
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      date: new Date(scandal.startDate)
    }];
  }

  const sortedScandals = [...scandals].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const positions: ScandalPosition[] = [];
  const tracks: Array<{ 
    scandals: Array<{ startX: number; endX: number; id: string }>;
    y: number;
  }> = [];

  let currentX = 200; // Starting padding

  for (let i = 0; i < sortedScandals.length; i++) {
    const scandal = sortedScandals[i];
    const currentYear = new Date(scandal.startDate).getFullYear();
    
    if (i > 0) {
      const prevYear = new Date(sortedScandals[i - 1].startDate).getFullYear();
      const yearDiff = currentYear - prevYear;
      
      // Normal spacing based on year difference
        currentX += Math.max(MIN_HORIZONTAL_SPACING * 2, yearDiff * 30);
    }
    
    const x = currentX;
    const startX = x;
    const endX = x + CARD_WIDTH;
    
    // Find the best track for this scandal
    let assignedTrack = -1;
    
    for (let j = 0; j < tracks.length; j++) {
      const track = tracks[j];
      let canFit = true;
      
      for (const existingScandal of track.scandals) {
        const horizontalOverlap = !(endX + MIN_HORIZONTAL_SPACING < existingScandal.startX || 
                                   startX - MIN_HORIZONTAL_SPACING > existingScandal.endX);
        if (horizontalOverlap) {
          canFit = false;
          break;
        }
      }
      
      if (canFit) {
        assignedTrack = j;
        break;
      }
    }
    
    if (assignedTrack === -1) {
      assignedTrack = tracks.length;
      tracks.push({
        scandals: [],
        y: TIMELINE_Y + 50 + (assignedTrack * TRACK_HEIGHT)
      });
    }
    
    tracks[assignedTrack].scandals.push({ startX, endX, id: scandal.id });
    
    positions.push({
      id: scandal.id,
      x: startX,
      y: tracks[assignedTrack].y,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      date: new Date(scandal.startDate)
    });
    
    currentX += CARD_WIDTH + MIN_HORIZONTAL_SPACING;
  }

  return positions;
};

// Advanced collision detection and track assignment
export const calculateScandalPositions = (
  scandals: Scandal[],
  startYear: number,
  endYear: number,
  timelineWidth: number
): ScandalPosition[] => {
  if (scandals.length === 0) return [];

  // Sort scandals by date to process them chronologically
  const sortedScandals = [...scandals].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const positions: ScandalPosition[] = [];
  const tracks: Array<{ 
    scandals: Array<{ startX: number; endX: number; id: string }>;
    y: number;
  }> = [];

  sortedScandals.forEach(scandal => {
    const x = getXPositionForDate(scandal.startDate, startYear, endYear, timelineWidth);
    const startX = x - CARD_WIDTH / 2;
    const endX = x + CARD_WIDTH / 2;
    
    // Find the best track for this scandal
    let assignedTrack = -1;
    
    // Try to find an existing track where this scandal fits
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      let canFit = true;
      
      // Check collision with all scandals in this track
      for (const existingScandal of track.scandals) {
        const horizontalOverlap = !(endX + MIN_HORIZONTAL_SPACING < existingScandal.startX || 
                                   startX - MIN_HORIZONTAL_SPACING > existingScandal.endX);
        if (horizontalOverlap) {
          canFit = false;
          break;
        }
      }
      
      if (canFit) {
        assignedTrack = i;
        break;
      }
    }
    
    // If no existing track works, create a new one
    if (assignedTrack === -1) {
      assignedTrack = tracks.length;
      tracks.push({
        scandals: [],
        y: TIMELINE_Y + 50 + (assignedTrack * TRACK_HEIGHT)
      });
    }
    
    // Add scandal to the assigned track
    tracks[assignedTrack].scandals.push({ startX, endX, id: scandal.id });
    
    const y = tracks[assignedTrack].y;
    
    positions.push({
      id: scandal.id,
      x: startX,
      y: y,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      date: new Date(scandal.startDate)
    });
  });

  return positions;
};

export const generateYearMarkers = (
  startYear: number,
  endYear: number,
  timelineWidth: number,
  zoomLevel: number
): Array<{ year: number; x: number; isMainMarker: boolean }> => {
  const markers: Array<{ year: number; x: number; isMainMarker: boolean }> = [];
  const yearSpan = endYear - startYear;
  
  // Determine marker interval based on zoom level and available space
  let interval = 1;
  const pixelsPerYear = timelineWidth / yearSpan;
  
  if (pixelsPerYear < 30) interval = 10;
  else if (pixelsPerYear < 60) interval = 5;
  else if (pixelsPerYear < 120) interval = 2;
  else interval = 1;

  // Generate markers
  const startMarker = Math.ceil(startYear / interval) * interval;
  for (let year = startMarker; year <= endYear; year += interval) {
    const x = ((year - startYear) / yearSpan) * timelineWidth;
    const isMainMarker = interval <= 2 || year % (interval === 10 ? 10 : 5) === 0;
    
    if (x >= 0 && x <= timelineWidth) {
      markers.push({ year, x, isMainMarker });
    }
  }

  return markers;
};

// Calculate visible scandals for rendering optimization (only what's on screen)
export const getVisibleScandals = (
  positions: ScandalPosition[],
  scrollLeft: number,
  viewportWidth: number
): ScandalPosition[] => {
  const buffer = 200; // Buffer zone to prevent flickering
  const visibleLeft = scrollLeft - buffer;
  const visibleRight = scrollLeft + viewportWidth + buffer;
  
  return positions.filter(position => {
    const cardLeft = position.x;
    const cardRight = position.x + position.width;
    
    // Check if card is at least partially visible (with buffer)
    return cardRight >= visibleLeft && cardLeft <= visibleRight;
  });
};

// Calculate cumulative scandals for statistics (all scandals from start to current view)
export const getCumulativeScandals = (
  positions: ScandalPosition[],
  scandals: Scandal[],
  scrollLeft: number,
  viewportWidth: number
): Scandal[] => {
  // Calculate the rightmost edge of the current viewport
  const viewportRightEdge = scrollLeft + viewportWidth;
  
  // Get all scandal positions that are at or before the current viewport's right edge
  // This includes all scandals to the left (already passed) + those currently visible
  const cumulativePositions = positions.filter(position => {
    // Use the center of the card as reference point for more accurate cumulative calculation
    const cardCenter = position.x + (position.width / 2);
    return cardCenter <= viewportRightEdge;
  });
  
  // Sort by date to ensure chronological order
  const sortedPositions = cumulativePositions.sort((a, b) => 
    a.date.getTime() - b.date.getTime()
  );
  
  // Map positions back to scandal objects
  const cumulativeScandals = sortedPositions
    .map(position => scandals.find(scandal => scandal.id === position.id))
    .filter((scandal): scandal is Scandal => scandal !== undefined);
  
  return cumulativeScandals;
};

/**
 * Calculate the dynamic date range based on visible scandals
 * Extends 1 year before first scandal and 1 year after last scandal
 */
export const calculateDynamicDateRange = (scandals: Scandal[]): { start: number; end: number } => {
  if (!scandals.length) {
    // Default range if no scandals
    const currentYear = new Date().getFullYear();
    return { start: currentYear - 1, end: currentYear + 1 };
  }

  // Sort scandals by date
  const sortedScandals = [...scandals].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  
  // Get first and last scandal years
  const firstYear = new Date(sortedScandals[0].startDate).getFullYear();
  const lastYear = scandals.length > 1 
    ? new Date(sortedScandals[sortedScandals.length - 1].startDate).getFullYear()
    : firstYear; // If only one scandal, use its year as last year

  // Extend range by 1 year on each side
  return {
    start: firstYear - 1,
    end: lastYear + 1
  };
};

export const findNearestYearMarker = (
  scrollPosition: number,
  viewportWidth: number,
  yearMarkers: Array<{ year: number; x: number; isMainMarker: boolean }>
): number => {
  // Position du centre de l'écran
  const centerPosition = scrollPosition + viewportWidth / 2;
  
  // Trouver le dernier marqueur à gauche du centre
  const markersToLeft = yearMarkers.filter(marker => marker.x <= centerPosition);
  
  if (markersToLeft.length > 0) {
    // Prendre le dernier marqueur à gauche (le plus proche du centre)
    return markersToLeft[markersToLeft.length - 1].year;
  } else {
    // Si aucun marqueur à gauche, prendre le premier marqueur à droite et soustraire 1
    const firstMarkerToRight = yearMarkers[0];
    return firstMarkerToRight ? firstMarkerToRight.year - 1 : new Date().getFullYear();
  }
};