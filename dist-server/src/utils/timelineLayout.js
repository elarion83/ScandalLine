var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var CARD_WIDTH = 280;
export var CARD_HEIGHT = 180;
export var TIMELINE_HEIGHT = 3;
export var TIMELINE_Y = 120;
export var MIN_VERTICAL_SPACING = 25;
export var MIN_HORIZONTAL_SPACING = 15;
export var TRACK_HEIGHT = CARD_HEIGHT + MIN_VERTICAL_SPACING;
export var BASE_PIXELS_PER_YEAR = 150;
export var MIN_GAP_YEARS = 6; // Minimum years to show a gap
export var GAP_VISUAL_WIDTH = 120; // Fixed width for gap visual element
// Check if timeline needs scrolling (more than one affair)
export var needsScrolling = function (scandals) {
    return scandals.length > 1;
};
// Detect significant gaps in timeline
export var detectTimelineGaps = function (scandals) {
    if (scandals.length <= 1)
        return [];
    var sortedScandals = __spreadArray([], scandals, true).sort(function (a, b) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    var gaps = [];
    for (var i = 0; i < sortedScandals.length - 1; i++) {
        var currentYear = new Date(sortedScandals[i].startDate).getFullYear();
        var nextYear = new Date(sortedScandals[i + 1].startDate).getFullYear();
        var yearDiff = nextYear - currentYear;
        if (yearDiff >= MIN_GAP_YEARS) {
            gaps.push({
                startYear: currentYear + 1,
                endYear: nextYear - 1,
                x: 0, // Will be calculated later
                width: GAP_VISUAL_WIDTH
            });
        }
    }
    return gaps;
};
// Calculate optimized timeline width considering gaps
export var calculateOptimizedTimelineWidth = function (scandals, startYear, endYear, zoomLevel) {
    if (scandals.length === 0) {
        return {
            width: Math.max(800, window.innerWidth || 1200),
            gaps: []
        };
    }
    if (scandals.length === 1) {
        // Single affair - minimal width, no scrolling needed
        return {
            width: Math.max(800, window.innerWidth || 1200),
            gaps: []
        };
    }
    var gaps = detectTimelineGaps(scandals);
    if (gaps.length === 0) {
        // No significant gaps - use normal calculation
        var yearSpan = endYear - startYear;
        return {
            width: Math.max(1400, yearSpan * BASE_PIXELS_PER_YEAR * zoomLevel),
            gaps: []
        };
    }
    // Calculate compressed timeline width
    var totalWidth = 0;
    var currentX = 200; // Starting padding
    var updatedGaps = [];
    var sortedScandals = __spreadArray([], scandals, true).sort(function (a, b) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    for (var i = 0; i < sortedScandals.length; i++) {
        var currentYear = new Date(sortedScandals[i].startDate).getFullYear();
        if (i > 0) {
            var prevYear = new Date(sortedScandals[i - 1].startDate).getFullYear();
            var yearDiff = currentYear - prevYear;
            if (yearDiff >= MIN_GAP_YEARS) {
                // Add gap visual element
                updatedGaps.push({
                    startYear: prevYear + 1,
                    endYear: currentYear - 1,
                    x: currentX,
                    width: GAP_VISUAL_WIDTH
                });
                currentX += GAP_VISUAL_WIDTH + MIN_HORIZONTAL_SPACING;
            }
            else {
                // Normal spacing for close years
                currentX += Math.max(MIN_HORIZONTAL_SPACING * 2, yearDiff * 30);
            }
        }
        // Add space for the scandal card
        currentX += CARD_WIDTH + MIN_HORIZONTAL_SPACING;
    }
    // Add final padding
    totalWidth = currentX + 200;
    return {
        width: Math.max(1400, totalWidth),
        gaps: updatedGaps
    };
};
export var calculateTimelineWidth = function (startYear, endYear, zoomLevel) {
    var yearSpan = endYear - startYear;
    return Math.max(1400, yearSpan * BASE_PIXELS_PER_YEAR * zoomLevel);
};
export var getXPositionForDate = function (dateString, startYear, endYear, timelineWidth) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var monthProgress = date.getMonth() / 12;
    var dayProgress = date.getDate() / 365;
    var exactYear = year + monthProgress + dayProgress;
    var yearProgress = (exactYear - startYear) / (endYear - startYear);
    return Math.max(CARD_WIDTH / 2, Math.min(timelineWidth - CARD_WIDTH / 2, yearProgress * timelineWidth));
};
// Calculate optimized positions considering gaps
export var calculateOptimizedScandalPositions = function (scandals, gaps) {
    if (scandals.length === 0)
        return [];
    if (scandals.length === 1) {
        // Single scandal - center it
        var scandal = scandals[0];
        var viewportWidth = window.innerWidth || 1200;
        return [{
                id: scandal.id,
                x: viewportWidth / 2 - CARD_WIDTH / 2,
                y: 200, // Center vertically in viewport
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                date: new Date(scandal.startDate)
            }];
    }
    var sortedScandals = __spreadArray([], scandals, true).sort(function (a, b) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    var positions = [];
    var tracks = [];
    var currentX = 200; // Starting padding
    for (var i = 0; i < sortedScandals.length; i++) {
        var scandal = sortedScandals[i];
        var currentYear = new Date(scandal.startDate).getFullYear();
        if (i > 0) {
            var prevYear = new Date(sortedScandals[i - 1].startDate).getFullYear();
            var yearDiff = currentYear - prevYear;
            if (yearDiff >= MIN_GAP_YEARS) {
                // Jump over the gap
                currentX += GAP_VISUAL_WIDTH + MIN_HORIZONTAL_SPACING;
            }
            else {
                // Normal spacing
                currentX += Math.max(MIN_HORIZONTAL_SPACING * 2, yearDiff * 30);
            }
        }
        var x = currentX;
        var startX = x;
        var endX = x + CARD_WIDTH;
        // Find the best track for this scandal
        var assignedTrack = -1;
        for (var j = 0; j < tracks.length; j++) {
            var track = tracks[j];
            var canFit = true;
            for (var _i = 0, _a = track.scandals; _i < _a.length; _i++) {
                var existingScandal = _a[_i];
                var horizontalOverlap = !(endX + MIN_HORIZONTAL_SPACING < existingScandal.startX ||
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
        tracks[assignedTrack].scandals.push({ startX: startX, endX: endX, id: scandal.id });
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
export var calculateScandalPositions = function (scandals, startYear, endYear, timelineWidth) {
    if (scandals.length === 0)
        return [];
    // Sort scandals by date to process them chronologically
    var sortedScandals = __spreadArray([], scandals, true).sort(function (a, b) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    var positions = [];
    var tracks = [];
    sortedScandals.forEach(function (scandal) {
        var x = getXPositionForDate(scandal.startDate, startYear, endYear, timelineWidth);
        var startX = x - CARD_WIDTH / 2;
        var endX = x + CARD_WIDTH / 2;
        // Find the best track for this scandal
        var assignedTrack = -1;
        // Try to find an existing track where this scandal fits
        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            var canFit = true;
            // Check collision with all scandals in this track
            for (var _i = 0, _a = track.scandals; _i < _a.length; _i++) {
                var existingScandal = _a[_i];
                var horizontalOverlap = !(endX + MIN_HORIZONTAL_SPACING < existingScandal.startX ||
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
        tracks[assignedTrack].scandals.push({ startX: startX, endX: endX, id: scandal.id });
        var y = tracks[assignedTrack].y;
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
export var generateYearMarkers = function (startYear, endYear, timelineWidth, zoomLevel) {
    var markers = [];
    var yearSpan = endYear - startYear;
    // Determine marker interval based on zoom level and available space
    var interval = 1;
    var pixelsPerYear = timelineWidth / yearSpan;
    if (pixelsPerYear < 30)
        interval = 10;
    else if (pixelsPerYear < 60)
        interval = 5;
    else if (pixelsPerYear < 120)
        interval = 2;
    else
        interval = 1;
    // Generate markers
    var startMarker = Math.ceil(startYear / interval) * interval;
    for (var year = startMarker; year <= endYear; year += interval) {
        var x = ((year - startYear) / yearSpan) * timelineWidth;
        var isMainMarker = interval <= 2 || year % (interval === 10 ? 10 : 5) === 0;
        if (x >= 0 && x <= timelineWidth) {
            markers.push({ year: year, x: x, isMainMarker: isMainMarker });
        }
    }
    return markers;
};
// Calculate visible scandals for rendering optimization (only what's on screen)
export var getVisibleScandals = function (positions, scrollLeft, viewportWidth) {
    var buffer = 200; // Buffer zone to prevent flickering
    var visibleLeft = scrollLeft - buffer;
    var visibleRight = scrollLeft + viewportWidth + buffer;
    return positions.filter(function (position) {
        var cardLeft = position.x;
        var cardRight = position.x + position.width;
        // Check if card is at least partially visible (with buffer)
        return cardRight >= visibleLeft && cardLeft <= visibleRight;
    });
};
// Calculate cumulative scandals for statistics (all scandals from start to current view)
export var getCumulativeScandals = function (positions, scandals, scrollLeft, viewportWidth) {
    // Calculate the rightmost edge of the current viewport
    var viewportRightEdge = scrollLeft + viewportWidth;
    // Get all scandal positions that are at or before the current viewport's right edge
    // This includes all scandals to the left (already passed) + those currently visible
    var cumulativePositions = positions.filter(function (position) {
        // Use the center of the card as reference point for more accurate cumulative calculation
        var cardCenter = position.x + (position.width / 2);
        return cardCenter <= viewportRightEdge;
    });
    // Sort by date to ensure chronological order
    var sortedPositions = cumulativePositions.sort(function (a, b) {
        return a.date.getTime() - b.date.getTime();
    });
    // Map positions back to scandal objects
    var cumulativeScandals = sortedPositions
        .map(function (position) { return scandals.find(function (scandal) { return scandal.id === position.id; }); })
        .filter(function (scandal) { return scandal !== undefined; });
    return cumulativeScandals;
};
/**
 * Calculate the dynamic date range based on visible scandals
 * Extends 1 year before first scandal and 1 year after last scandal
 */
export var calculateDynamicDateRange = function (scandals) {
    if (!scandals.length) {
        // Default range if no scandals
        var currentYear = new Date().getFullYear();
        return { start: currentYear - 1, end: currentYear + 1 };
    }
    // Sort scandals by date
    var sortedScandals = __spreadArray([], scandals, true).sort(function (a, b) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    // Get first and last scandal years
    var firstYear = new Date(sortedScandals[0].startDate).getFullYear();
    var lastYear = scandals.length > 1
        ? new Date(sortedScandals[sortedScandals.length - 1].startDate).getFullYear()
        : firstYear; // If only one scandal, use its year as last year
    // Extend range by 1 year on each side
    return {
        start: firstYear - 1,
        end: lastYear + 1
    };
};
// Calculate the current year being viewed based on scroll position
export var calculateCurrentYear = function (scrollPosition, viewportWidth, timelineWidth, startYear, endYear) {
    var centerPosition = scrollPosition + viewportWidth / 2;
    var yearSpan = endYear - startYear;
    var yearProgress = centerPosition / timelineWidth;
    var currentYear = startYear + (yearProgress * yearSpan);
    return Math.round(Math.max(startYear, Math.min(endYear, currentYear)));
};
