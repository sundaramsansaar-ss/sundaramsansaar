const paths = {
  bag: (
    <>
      <path d="M6.5 8.5h11l-1 10h-9l-1-10Z" />
      <path d="M9 8.5a3 3 0 0 1 6 0" />
    </>
  ),
  card: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M7 14.5h4" />
    </>
  ),
  chevronRight: <path d="m9 6 6 6-6 6" />,
  eye: (
    <>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  flame: (
    <>
      <path d="M12 21c3.8 0 6.5-2.7 6.5-6.2 0-2.5-1.4-4.5-3.4-6.4-.9 2.1-2.1 3.1-3.4 3.7.4-2.5-.5-5-3.1-7.1C8.5 8.8 5.5 10.8 5.5 15c0 3.5 2.7 6 6.5 6Z" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  heart: <path d="M20.5 8.8c0 5.2-8.5 10-8.5 10s-8.5-4.8-8.5-10A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.8Z" />,
  headphones: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  moon: <path d="M20 15.5A8 8 0 0 1 8.5 4a7 7 0 1 0 11.5 11.5Z" />,
  rotate: (
    <>
      <path d="M4 12a8 8 0 0 1 13.6-5.6L20 8.8" />
      <path d="M20 4v4.8h-4.8" />
      <path d="M20 12a8 8 0 0 1-13.6 5.6L4 15.2" />
      <path d="M4 20v-4.8h4.8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  star: <path d="m12 3 2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9L12 3Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2" />
      <path d="M12 19.5v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2.5 12h2" />
      <path d="M19.5 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),
  truck: (
    <>
      <path d="M3.5 6.5h11v9h-11z" />
      <path d="M14.5 9.5h3l3 3v3h-6" />
      <circle cx="7" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  )
};

export default function Icon({ name, size = 20, className = "", fill = "none", strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={fill}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  );
}
