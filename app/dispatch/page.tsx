"use client";

import { useEffect, useState } from "react";

export default function DispatchPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onChagenCount() {
      setCount((count) => count + 1);
    }
    window?.addEventListener("dispatch:count", onChagenCount);
    return () => {
      window?.removeEventListener("dispatch:count", onChagenCount);
    };
  }, []);

  return (
    <div className="w-[500px] mx-auto flex flex-col items-center justify-center text-white">
      <p className="font-bold text-2xl">카운트:{count}</p>
      <div className="mt-2">
        <a
          className="px-1 py-1 bg-white text-black rounded"
          href="/dispatch/count"
          target="_blank"
        >
          카운트 증가 시키러 가기
        </a>
      </div>
    </div>
  );
}
