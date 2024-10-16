import Itemslist from "./_components/Itemslist";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const { id } = searchParams;

  return (
    <div className="w-full h-full flex  justify-center text-white">
      <div className="w-[500px] h-full p-3">
        <h1 className="text-3xl font-bold">React-Query Prefetching</h1>
        <p className="mt-2 font-semibold">
          선택된 탭 영역 좌,우로는 프리페칭이 적용됩니다.
        </p>
        <div className="mt-6">
          <Itemslist id={id as string} />
        </div>
      </div>
    </div>
  );
}
