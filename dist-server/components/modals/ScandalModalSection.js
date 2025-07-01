import React from 'react';
const ScandalModalSection = ({ title, children, className = '', icon: Icon }) => {
    return (<section className={`space-y-4 border-2 border-transparent transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600 ${className}`}>
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
        {Icon && <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400"/>}
        {title}
      </h3>
      {children} 
    </section>);
};
export { ScandalModalSection };
