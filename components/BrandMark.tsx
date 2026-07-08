export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 16L20 4L32 16L20 28L8 16Z"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M16 16L28 4L40 16L28 28L16 16Z"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12 16L24 4L36 16L24 28L12 16Z"
        fill="url(#brandFill)"
        opacity="0.95"
      />
      <defs>
        <linearGradient
          id="brandFill"
          x1="24"
          y1="4"
          x2="24"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}
