import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="text-base-group flex h-9 w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary text-center font-bold text-white xs:h-[3.15rem] sm:h-[4.05rem] disabled:bg-[#A7A7A7] disabled:text-contentPrimary"
      {...props}
    >
      {children}
    </button>
  );
}
