import React from 'react';

interface TimelineGridProps {
  timelineWidth: number;
}

const TimelineGrid: React.FC<TimelineGridProps> = ({ timelineWidth }) => {
  return (
    <div 
      className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent dark:via-gray-900/5"
      style={{ width: timelineWidth }}
    >
      {/* Grille de fond */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  );
};

export default TimelineGrid; 