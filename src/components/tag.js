import React from 'react';

const Tag = ({ children, className, ...props }) => {
  return (
    <span
      className={`border italic inline-block rounded-md py-1 px-2 font-semibold text-xs uppercase ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
