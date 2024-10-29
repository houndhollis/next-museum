"use server";

export const onClickError = async (): Promise<string[] | Error> => {
  const isPass = Math.random() > 0.5;

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isPass) {
        reject(new Error("에러"));
      } else {
        return resolve(["1", "2", "3"]);
      }
    }, 1000);
  });
};
