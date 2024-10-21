"use client";

import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(true);

  const handleModeChange = () => {
    setToggle(!toggle);
    document.documentElement.classList.toggle("dark", toggle);
    document.documentElement.classList.toggle("light", !toggle);
  };

  return (
    <div className="w-full max-w-[500px] flex flex-col justify-center mx-auto text-white">
      <div className="w-full text-center">
        <p className="text-xs">폰트 테스트12</p>
        <p className="text-s">폰트 테스트14</p>
        <p className="text-m">폰트 테스트16</p>
        <p className="text-l">폰트 테스트18</p>
        <p className="text-2xl">폰트 테스트20</p>
        <p className="text-3xl">폰트 테스트22</p>
      </div>
      <div className="px-3 py-3 flex items-center gap-2">
        <div className="flex-1 h-[100px] text-m font-bold bg-primary">
          Primary
        </div>
        <div className="flex-1 h-[100px] text-m font-bold bg-secondary">
          Secondary
        </div>
        <div className="flex-1 h-[100px] text-m font-bold bg-accent">
          Accent
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleModeChange()}
          className="w-[100px] font-bold py-2 bg-primary"
        >
          Palette 전환
        </button>
      </div>
    </div>
  );
}
