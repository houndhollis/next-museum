import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-[24px]">목차</h1>
      <div></div>
      <Link href={"/prefetching"} className="font-bold">
        React-Query Prefetching
      </Link>
    </main>
  );
}
