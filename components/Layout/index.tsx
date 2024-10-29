"use client";

if (window) {
  window.addEventListener("storage", (event) => {
    if (event.key === "dispatch") {
      if (typeof event.newValue !== "string") {
        return;
      }

      const objData = JSON.parse(event.newValue as string);
      window.dispatchEvent(
        new CustomEvent(`dispatch:${objData.key}`, { detail: objData.data })
      );
      window.localStorage.removeItem("dispatch");
    }
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
