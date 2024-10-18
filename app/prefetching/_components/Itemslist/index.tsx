"use client";

import Tabs from "../Tabs";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail";
import { ParentProductItem } from "../../type";
import { getPrefechingData } from "../../action";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Tab } from "../../mock/tabData";

export default function Itemslist({ id = "1" }: { id: string }) {
  const queryClient = useQueryClient();
  const tabLength = Tab.length;

  useEffect(() => {
    const prevId = Number(id) - 1;
    const nextId = Number(id) + 1;
    if (prevId > 0) {
      queryClient.prefetchQuery({
        queryKey: ["prefetching", prevId.toString()],
        queryFn: () => getPrefechingData(prevId),
      });
    }

    if (nextId <= tabLength) {
      queryClient.prefetchQuery({
        queryKey: ["prefetching", nextId.toString()],
        queryFn: () => getPrefechingData(nextId),
      });
    }
  }, [id, queryClient]);

  const { data, isLoading } = useQuery<ParentProductItem[]>({
    queryKey: ["prefetching", id],
    queryFn: () => getPrefechingData(Number(id)),
  });

  return (
    <div>
      <Tabs id={id} />
      {isLoading && (
        <div className="mt-3 text-[24px] text-center">...Loading</div>
      )}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {data &&
          data[0].data.map((item) => <ItemDetail key={item.id} item={item} />)}
      </div>
    </div>
  );
}
