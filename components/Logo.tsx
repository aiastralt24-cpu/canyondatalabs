export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="22" width="8" height="14" rx="1.5" fill="#E8A882" />
      <rect x="10" y="12" width="8" height="24" rx="1.5" fill="#C4572A" />
      <rect x="20" y="6" width="8" height="30" rx="1.5" fill="#C4572A" />
      <rect x="30" y="16" width="6" height="20" rx="1.5" fill="#D4784E" />
    </svg>
  );
}

export function LogoLockup({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/canyon-logo-horizontal-transparent.png"
      : "/canyon-logo-horizontal-dark-transparent.png";

  return (
    <img
      className={`logo-lockup${className ? " " + className : ""}`}
      src={src}
      alt="Canyon Data Labs"
      width={1695}
      height={469}
    />
  );
}
