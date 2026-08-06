import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-[#5C4A36] ${className}`}
    >
      <span className="
        flex items-center justify-center
        h-8 w-8 rounded-full border border-[#C8BAA6]/60
        bg-[#FAF7F2] group-hover:bg-[#EDE8DF]
        transition-all duration-300
        group-hover:-translate-x-0.5
      ">
        <ArrowLeft size={15} />
      </span>
      {label}
    </a>
  );
}
