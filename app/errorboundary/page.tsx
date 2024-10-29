"use client";

import ErrorTestList from "./components/ErrorTestList";
import ErrorFallBack from "./components/ErrorFallBack";
import ErrorWrapper from "./components/ErrorWrapper";

export default function Page() {
  return (
    <div>
      <h1 className="text-white">에러 바운더리가 정상 작동이 되나요? </h1>
      <ErrorWrapper
        fallbackComponent={ErrorFallBack}
        suspenseFallback={<h1>Loading...</h1>}
      >
        <ErrorTestList />
      </ErrorWrapper>
    </div>
  );
}
