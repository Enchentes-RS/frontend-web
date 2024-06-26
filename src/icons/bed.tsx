export const Bed = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12C22 10.9 21.1 10 20 10ZM13 7H18V10H13V7ZM6 7H11V10H6V7ZM20 15H4V12H20V15Z"
        fill="currentColor"
      />
    </svg>
  )
}
