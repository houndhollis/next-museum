"use client";
import { Tab } from "../../mock/tabData";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Tabs({ id }: { id: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const onPushRouter = (id: number): void => {
    router.push(pathname + `?id=${id}`);
  };

  return (
    <div className="mt-3">
      <div className="flex gap-4 flex-nowrap overflow-x-auto no-scrollbar">
        {Tab.map((tab) => (
          <div
            onClick={() => onPushRouter(tab.id)}
            className="shrink-0 cursor-pointer"
            key={tab.id}
          >
            <p
              className={`px-2 py-1 rounded  ${
                Number(id) !== tab.id && "bg-white text-black"
              } ${
                Number(id) === tab.id &&
                "border border-b-white bg-black text-white"
              }`}
            >
              {tab.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
