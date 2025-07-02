import React from 'react';
var TimelineGrid = function (_a) {
    var timelineWidth = _a.timelineWidth;
    return (React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent dark:via-gray-900/5", style: { width: timelineWidth } },
        React.createElement("div", { className: "absolute inset-0 opacity-5", style: {
                backgroundImage: "\n            linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),\n            linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)\n          ",
                backgroundSize: '20px 20px'
            } })));
};
export default TimelineGrid;
