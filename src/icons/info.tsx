export const Info = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="M12 2.916c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm1 15h-2v-6h2v6Zm0-8h-2v-2h2v2Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 .916h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
