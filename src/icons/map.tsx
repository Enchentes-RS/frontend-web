export const Map = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="m15 6.016-6-2.1-6 2.02v16.2l6-2.33 6 2.1 6-2.02v-16.2l-6 2.33Zm0 13.79-6-2.11V6.026l6 2.11v11.67Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 .916h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
