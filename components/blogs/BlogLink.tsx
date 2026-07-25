"use client";

interface BlogLinkProps {
  href: string;
  from: "home" | "list";
  className?: string;
  children: React.ReactNode;
}

export default function BlogLink({ href, from, className, children }: BlogLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => sessionStorage.setItem("blog-back-from", from)}
    >
      {children}
    </a>
  );
}
