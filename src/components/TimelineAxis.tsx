import React from 'react';
import { generateYearMarkers } from '../utils/timelineLayout';

interface TimelineAxisProps {
  startYear: number;
  endYear: number;
  timelineWidth: number;
  zoomLevel: number;
  timelineY: number;
}

const TimelineAxis: React.FC<TimelineAxisProps> = ({
  startYear,
  endYear,
  timelineWidth,
  zoomLevel,
  timelineY
}) => {
  const yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, zoomLevel);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Main timeline line */}
      <div
        className="absolute bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-400 shadow-lg shadow-fuchsia-200/20 dark:shadow-fuchsia-900/20"
        style={{
          left: 0,
          right: 0,
          top: timelineY - 2,
          height: '8px',
          borderRadius: '4px'
        }}
      />

      {/* Timeline glow effect */}
      <div
        className="absolute bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent dark:via-fuchsia-800 opacity-30 blur-sm"
        style={{
          left: 0,
          right: 0,
          top: timelineY - 4,
          height: '12px',
          borderRadius: '6px'
        }}
      />

      {/* Year markers and labels */}
      {yearMarkers.map(({ year, x, isMainMarker }) => (
        <div key={year} className="absolute" style={{ left: x, top: timelineY }}>
          {/* Tick mark */}
          <div
            className={`absolute transition-all duration-200 ${
              isMainMarker 
                ? 'w-1 h-10 bg-gradient-to-b from-violet-400 to-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-200/20 dark:shadow-fuchsia-900/20' 
                : 'w-0.5 h-6 bg-gradient-to-b from-violet-300 to-fuchsia-400 rounded-full opacity-70'
            }`}
            style={{
              left: '-2px',
              top: isMainMarker ? '-20px' : '-12px'
            }}
          />
          
          {/* Year label */}
          {isMainMarker && (
            <div
              className="absolute text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg shadow-fuchsia-200/10 dark:shadow-fuchsia-900/10 border border-violet-100 dark:border-violet-800"
              style={{
                top: '-52px',
                left: '0'
              }}
            >
              {year}
            </div>
          )}
          
          {/* Minor tick labels for high zoom */}
          {!isMainMarker && zoomLevel > 2 && (
            <div
              className="absolute text-xs text-violet-600 dark:text-violet-400 whitespace-nowrap transform -translate-x-1/2"
              style={{
                top: '-32px',
                left: '0'
              }}
            >
              {year}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineAxis;