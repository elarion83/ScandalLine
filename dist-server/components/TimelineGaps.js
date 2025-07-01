import React from 'react';
import { Scissors, Calendar } from 'lucide-react';
const TimelineGaps = ({ gaps, timelineY }) => {
    if (gaps.length === 0)
        return null;
    return (<div className="absolute inset-0 pointer-events-none">
      {gaps.map((gap, index) => (<div key={index} className="absolute flex flex-col items-center justify-center" style={{
                left: gap.x,
                width: gap.width,
                top: timelineY - 30,
                height: 60
            }}>
          {/* Gap visual indicator */}
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-lg px-3 py-2 shadow-sm">
            <Scissors className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Gap temporel
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3"/>
                {gap.startYear} - {gap.endYear}
              </div>
            </div>
          </div>
          
          {/* Dashed line connecting to timeline */}
          <div className="w-px border-l-2 border-dashed border-gray-400 dark:border-gray-500" style={{ height: '20px' }}/>
        </div>))}
    </div>);
};
export default TimelineGaps;
