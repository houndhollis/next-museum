"use client";

export default function CountPage() {
  const onChagneCount = () => {
    window.localStorage.setItem(
      "dispatch",
      JSON.stringify({ key: "count", data: { count: 1 } })
    );
  };

  return (
    <div className="w-[500px] flex flex-col items-center justify-center mx-auto text-white">
      <p>카운트 증가 시키는 페이지 입니다.</p>
      <button
        onClick={() => onChagneCount()}
        className="mt-2 px-1 py-0.5 bg-white text-black rounded"
      >
        증가 시키기 UP
      </button>
    </div>
  );
}
