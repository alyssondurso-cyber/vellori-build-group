import React from "react";

export default function VelloriLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="VELLORI Build Group">
      <svg
        viewBox="0 0 100 112"
        className={compact ? "h-10 w-9 flex-none" : "h-12 w-11 flex-none"}
        role="img"
        aria-hidden="true"
      >
        <path d="M7 9h22l28 50-12 22L7 9Z" fill="#C8A96B" />
        <path d="M72 9h22L58 75 47 55 72 9Z" fill="#C8A96B" />
        <path d="m46 69 12 22-11 19-12-22 11-19Z" fill="#C8A96B" />
      </svg>
      <span className="flex flex-col justify-center leading-none">
        <span className={compact ? "font-serif text-2xl tracking-[0.24em] text-white" : "font-serif text-[30px] tracking-[0.27em] text-white"}>
          VELLORI
        </span>
        <span className="mt-[7px] text-[9px] font-semibold uppercase tracking-[0.24em] text-[#C8A96B]">
          Build Group
        </span>
      </span>
    </span>
  );
}
