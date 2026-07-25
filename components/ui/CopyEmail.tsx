"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className="underline underline-offset-2 hover:opacity-80 transition cursor-pointer"
      >
        {email}
      </button>

      {copied &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#1C1410] text-[#FAF7F2] text-sm shadow-lg animate-fade-in-up">
            Email copied
          </div>,
          document.body
        )}
    </>
  );
}
