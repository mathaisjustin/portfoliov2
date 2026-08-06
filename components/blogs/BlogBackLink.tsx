"use client";

import { useEffect, useState } from "react";
import BackLink from "@/components/ui/BackLink";

export default function BlogBackLink() {
  const [from, setFrom] = useState<"home" | "list">("home");

  useEffect(() => {
    const stored = sessionStorage.getItem("blog-back-from");
    if (stored === "list") setFrom("list");
  }, []);

  const href = from === "list" ? "/blogs" : "/#blogs";
  const label = from === "list" ? "Back to all blogs" : "Back to Home";

  return <BackLink href={href} label={label} className="mb-10" />;
}
