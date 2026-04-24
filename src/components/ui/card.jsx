import React from "react";

// 🌟 Main Card container
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 shadow-xl rounded-2xl border border-gray-200 dark:border-slate-700 transition-all hover:shadow-2xl p-5 ${className}`}
    >
      {children}
    </div>
  );
};

// 🧩 Optional Card header
export const CardHeader = ({ title, icon: Icon, className = "" }) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-blue-500" />}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

// 🧠 Card Content (for inner sections)
export const CardContent = ({ children, className = "" }) => {
  return <div className={`text-gray-700 dark:text-gray-300 ${className}`}>{children}</div>;
};

// 💡 Card Footer (buttons, links, etc.)
export const CardFooter = ({ children, className = "" }) => {
  return (
    <div
      className={`mt-4 pt-3 border-t border-gray-100 dark:border-slate-700 flex justify-end gap-2 ${className}`}
    >
      {children}
    </div>
  );
};
