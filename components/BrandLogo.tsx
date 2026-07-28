import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  onClick?: () => void;
  /** Slightly smaller mark for dense footers */
  size?: "nav" | "footer";
};

/** Wordmark + chevron always LTR — never mirrored in Arabic. */
export default function BrandLogo({
  href,
  className = "",
  onClick,
  size = "nav",
}: Props) {
  const textClass =
    size === "nav"
      ? "font-display text-lg font-bold tracking-tight text-mist"
      : "font-display text-lg font-bold tracking-tight text-mist";

  return (
    <Link
      href={href}
      dir="ltr"
      lang="en"
      onClick={onClick}
      className={`brand-logo group relative z-10 flex shrink-0 items-center gap-2 ${textClass} ${className}`}
      aria-label="EndEdge"
    >
      <span className="relative">
        EndEdge
        <span
          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-orange/70 transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden
        />
      </span>
      <svg
        {...(size === "nav" ? { "data-brand-logo-chevron": "" } : {})}
        width={size === "nav" ? 13 : 12}
        height={size === "nav" ? 15 : 14}
        viewBox="0 0 12 14"
        aria-hidden
        className="mt-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
      </svg>
    </Link>
  );
}
