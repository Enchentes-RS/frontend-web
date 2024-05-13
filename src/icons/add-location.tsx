export const AddLocation = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="M19 1.916c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1Zm-7 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm2.72-9.53c-.44.36-.72.91-.72 1.53 0 1.1.9 2 2 2h1v1c0 1.1.9 2 2 2 .32 0 .62-.08.89-.21.07.45.11.92.11 1.41 0 3.18-2.45 6.92-7.34 11.23-.38.33-.95.33-1.33 0C6.45 19.036 4 15.296 4 12.116c0-4.98 3.8-8.2 8-8.2.94 0 1.86.16 2.72.47Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 .916h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
