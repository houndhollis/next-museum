import { useSuspenseQuery } from "@tanstack/react-query";

async function fetchTestApi() {
  const response = await fetch("API_URL");
  if (!response.ok) {
    throw new Error("API 호출 실패");
  }
  return response.json();
}

export const useTest = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: () => fetchTestApi(),
    staleTime: 1000 * 60,
  });

  return { data };
};
