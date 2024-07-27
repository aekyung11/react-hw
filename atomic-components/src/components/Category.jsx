import React from "react";

export function Category({ categoryGroup, categoryName, checked, onClick }) {
  return (
    <button
      type="button"
      className={`my-2 flex h-[3.8125rem] items-center justify-between rounded-lg ${
        checked
          ? "bg-primary text-background"
          : "bg-[#A7A7A7] text-contentPrimary"
      } p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]`}
      onClick={onClick}
    >
      <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
        <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
          {categoryGroup}
        </span>
        <span className="text-base-group">{categoryName}</span>
      </span>
      <img
        src={`/icon/${checked ? "check.svg" : "category-plus.svg"}`}
        className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
        alt={checked ? "선택됨" : "선택되지 않음"}
      />
    </button>
  );
}
