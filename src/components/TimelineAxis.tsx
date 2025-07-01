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
          {isMainMarker ? (
            <div 
              className="absolute writing-mode-vertical text-4xl font-black whitespace-nowrap"
              style={{
                writingMode: 'vertical-rl',
                transform: 'translateX(-50%) rotate(180deg)',
                top: '-80px'
              }}
            >
              <div className="relative">
                {/* Motif quadrillé */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
                    `,
                    backgroundSize: '8px 8px'
                  }}
                />
                
                {/* Conteneur avec effet glassmorphism */}
                <div className="relative px-3 py-4 rounded-2xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-[2px] border border-white/30 dark:border-white/10">
                  <span className="relative z-10 text-gray-800 dark:text-white tracking-wide">
                    {year}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            zoomLevel > 2 && (
              <div
                className="absolute writing-mode-vertical text-xl font-bold whitespace-nowrap"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'translateX(-50%) rotate(180deg)',
                  top: '-50px'
                }}
              >
                <div className="relative">
                  {/* Motif quadrillé plus petit */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
                      `,
                      backgroundSize: '6px 6px'
                    }}
                  />
                  
                  {/* Conteneur avec effet glassmorphism plus léger */}
                  <div className="relative px-2 py-3 rounded-xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-[1px] border border-white/20 dark:border-white/5">
                    <span className="relative z-10 text-gray-600 dark:text-gray-300 tracking-wide">
                      {year}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineAxis;