import React from 'react';

const TagButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-gray-100 rounded py-1 px-2 font-semibold text-sm text-gray-700 focus-within:ring focus-within:outline-none transition-all duration-75 border border-gray-300 shadow hover:shadow-none uppercase ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Inline = ({ children, className, ...props }) => {
  return (
    <button
      className={`focus:outline-none font-semibold text-sm underline-effect uppercase ${className}`}
      {...props}
    >
      #{children}
    </button>
  );
};

TagButton.Inline = Inline;

export default TagButton;
