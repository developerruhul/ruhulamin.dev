import React, { useState } from "react";
import cls from "classnames";

const LineClamp = ({ children, className }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <p className={cls({ "line-clamp-4": !expanded })}>{children}</p>
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="underline-effect outline-none focus:outline-none mt-1 text-purple-400 text-sm font-medium rounded"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default LineClamp;
