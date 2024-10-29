"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { onClickError } from "../action/errorAction";

export default function ErrorTestList() {
  const { data } = useSuspenseQuery({
    queryKey: ["errorTest"],
    queryFn: () => onClickError(),
  });

  return (
    <div>
      <h1 className="text-white text-2xl">에러테스트</h1>
    </div>
  );
}
