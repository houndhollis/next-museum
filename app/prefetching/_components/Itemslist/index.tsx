"use client";

import Tabs from "../Tabs";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPrefechingData } from "../../action";
import ItemDetail from "../ItemDetail";
import { useEffect } from "react";
import { ParentProductItem } from "../../type";

export default function Itemslist({ id = "1" }: { id: string }) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextId = Number(id) + 1;
    queryClient.prefetchQuery({
      queryKey: ["prefetching", nextId.toString()],
      queryFn: () => {
        return getPrefechingData(nextId);
      },
    });
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
