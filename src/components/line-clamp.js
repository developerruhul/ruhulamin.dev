import React, { useState } from "react";

const LineClamp = ({ className, text, component }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <p>
        {expanded ? text : `${text.slice(0, 170)}...`}
        {expanded && component}
      </p>
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
