import React from "react";

export default function VelloriLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center" aria-label="VELLORI Build Group">
      <img
        src="/vellori-uniform-mark.png"
        alt="VELLORI Build Group"
        className={compact ? "h-[72px] w-auto flex-none object-contain" : "h-[82px] w-auto flex-none object-contain"}
        width="300"
        height="202"
      />
    </span>
  );
}
