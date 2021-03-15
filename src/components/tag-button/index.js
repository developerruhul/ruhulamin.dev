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
    <span
      className={`border inline-block rounded-md py-1 px-2 font-semibold text-xs uppercase ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

TagButton.Inline = Inline;

export default TagButton;
