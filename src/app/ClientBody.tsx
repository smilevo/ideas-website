"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    // Dynamically load the Same runtime script
    const script = document.createElement("script");
    script.src = "//unpkg.com/same-runtime/dist/index.global.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <body suppressHydrationWarning className={`antialiased ${className || ""}`}>
      {children}
    </body>
  );
}
