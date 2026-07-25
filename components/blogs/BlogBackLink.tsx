"use client";

import { useEffect, useState } from "react";

export default function BlogBackLink() {
  const [from, setFrom] = useState<"home" | "list">("home");

  useEffect(() => {
    const stored = sessionStorage.getItem("blog-back-from");
    if (stored === "list") setFrom("list");
  }, []);

  const href = from === "list" ? "/blogs" : "/#blogs";
  const label = from === "list" ? "← Back to all blogs" : "← Back to home";

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition mb-10"
    >
      {label}
    </a>
  );
}
