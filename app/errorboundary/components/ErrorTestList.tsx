"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function ErrorTestList() {
  const onErrorTest = () => {
    throw new Error("error");
  };

  const { data } = useSuspenseQuery({
    queryKey: ["data2"],
    queryFn: () => onErrorTest(),
  });

  if (!data) {
    return;
  }
  return (
    <div>
      <h1 className="text-white text-2xl">에러테스트</h1>
    </div>
  );
}
