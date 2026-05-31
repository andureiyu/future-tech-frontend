"use client";

import { FaCircleCheck } from "react-icons/fa6";

const ITEMS = [
  "FUTURE-PROOF YOUR BUSINESS",
  "TRUSTED BY 500+ CLIENTS ACROSS MINDANAO",
  "ENTERPRISE-GRADE IT SOLUTIONS",
  "NETWORK · SECURITY · CLOUD",
  "YOUR LOCAL IT PARTNER IN TANDAG",
  "IT PROFESSIONALS",
  "WORKSTATIONS · SERVERS · CCTV",
  "FROM SURIGAO DEL SUR TO ALL OF MINDANAO",
  "PROVIDES TECHNICAL SUPPORT",
  "SMART TECH. LOCAL ROOTS.",
];

const Separator = () => (
  <span className="mx-6 text-accent text-[10px]" aria-hidden="true">
    <FaCircleCheck />
  </span>
);

const ItemList = () => (
  <>
    {ITEMS.map((item, i) => (
      <span key={i} className="inline-flex items-center">
        <span
          className="text-white/75 text-[10.5px] font-semibold tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {item}
        </span>
        <Separator />
      </span>
    ))}
  </>
);

export default function TickerBar() {
  return (
    <div className="w-full bg-gray-950 overflow-hidden border-b border-white/5 select-none">
      {/* Outer: clips overflow. Inner: the moving strip. */}
      <div className="ticker-outer">
        <div className="ticker-inner py-[9px]" aria-hidden="false">
          {/* Copy A */}
          <span className="ticker-set">
            <ItemList />
          </span>
          {/* Copy B — identical, immediately follows A */}
          <span className="ticker-set" aria-hidden="true">
            <ItemList />
          </span>
        </div>
      </div>
    </div>
  );
}
