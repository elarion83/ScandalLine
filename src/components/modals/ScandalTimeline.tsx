import React from 'react';
import { formatDate } from '../../utils/scandalUtils';

interface TimelineEvent {
  date: string;
  label: string;
  type: 'start' | 'investigation' | 'judgment' | 'conviction';
}

interface ScandalTimelineProps {
  events: TimelineEvent[];
}

export const ScandalTimeline: React.FC<ScandalTimelineProps> = ({ events }) => {
  const getEventStyle = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'start':
        return {
          dot: 'bg-blue-500 dark:bg-blue-400 ring-blue-100 dark:ring-blue-900',
          text: 'text-blue-700 dark:text-blue-300'
        };
      case 'investigation':
        return {
          dot: 'bg-amber-500 dark:bg-amber-400 ring-amber-100 dark:ring-amber-900',
          text: 'text-amber-700 dark:text-amber-300'
        };
      case 'judgment':
        return {
          dot: 'bg-purple-500 dark:bg-purple-400 ring-purple-100 dark:ring-purple-900',
          text: 'text-purple-700 dark:text-purple-300'
        };
      case 'conviction':
        return {
          dot: 'bg-red-500 dark:bg-red-400 ring-red-100 dark:ring-red-900',
          text: 'text-red-700 dark:text-red-300'
        };
    }
  };

  return (
    <div className="relative py-8 overflow-x-auto">
      <div className="absolute left-0 right-0 top-11 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1" />
      <div className="relative flex justify-between items-center min-w-[600px] px-4">
        {events.map((event, index) => {
          const style = getEventStyle(event.type);
          return (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${style.dot} ring-4 mb-2`} />
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {formatDate(event.date)}
              </div>
              <div className={`text-xs ${style.text}`}>
                {event.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 