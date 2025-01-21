"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [percent, setPercent] = useState(0);

  const getScrollPercent = () => {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const percent = (scroll / (scrollHeight - clientHeight)) * 100;

    setPercent(Math.floor(percent));
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercent);

    return () => {
      return window.removeEventListener("scroll", getScrollPercent);
    };
  }, []);

  return (
    <div className="relative max-w-[500px] mx-auto px-4">
      <div className="sticky top-0 bg-black z-10">
        <h1 className="text-white font-bold text-2xl">Transform 최적화</h1>
        <div
          style={{ transform: `scaleX(${percent / 100})` }}
          className="absolute left-0 w-full rounded origin-left transition-transform h-[3px] bg-white will-change-transform"
        />
      </div>
      <div className="mt-3">
        <p className="text-white text-xl">
          스크롤을 움직여 bar를 확인 할 수 있습니다.
        </p>
      </div>
      <div className="h-[2000px]" />
    </div>
  );
}
