export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flowtr-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7755" />
          <stop offset="100%" stopColor="#E64223" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="18" fill="#0a0a0d" />
      <circle cx="18" cy="18" r="17" fill="none" stroke="url(#flowtr-g)" strokeWidth="1.2" />
      <path
        d="M11 12 L25 12 L20 18 L24 24 L13 24 L18 18 Z"
        fill="url(#flowtr-g)"
      />
    </svg>
  );
}
