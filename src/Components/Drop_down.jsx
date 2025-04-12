import React from "react";

const Drop_down = ({ options }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-center mr-5 text-xl">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-amber-600 border-0 hover:bg-amber-200 font-semibold text-xl"
      >
        Menu
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {options.map((option, i) => (
          <li key={i}>
            <a>{String(option).toUpperCase()}</a>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default Drop_down;
