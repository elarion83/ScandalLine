import React from 'react';
var ScandalModalSection = function (_a) {
    var title = _a.title, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, Icon = _a.icon;
    return (React.createElement("section", { className: "space-y-4 border-2 border-transparent transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600 ".concat(className) },
        React.createElement("h3", { className: "flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white" },
            Icon && React.createElement(Icon, { className: "w-5 h-5 text-gray-600 dark:text-gray-400" }),
            title),
        children));
};
export { ScandalModalSection };
