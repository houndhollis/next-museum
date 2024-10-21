import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-[32px]">목차</h1>
      <div className="flex flex-col items-center gap-2">
        <Link href={"/prefetching"} className="text-[18px] font-bold">
          React-Query Prefetching
        </Link>
        <Link href={"/dispatch"} className="text-[18px] font-bold">
          Dispatch
        </Link>
        <Link href={"design"} className="text-[18px] font-bold">
          Design
        </Link>
      </div>
    </main>
  );
}
