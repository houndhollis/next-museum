"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="p-3">
      <Link className="text-white text-[20px] font-bold" href={"/"}>
        Home
      </Link>
    </div>
  );
}
