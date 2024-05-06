import type { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: JSX.Element;
  search?: boolean;
}

export const Input = ({ endAdornment, search = false, ...rest }: InputProps) => {
  return (
    <fieldset className="relative w-full">
      <input
        {...rest}
        type="text"
        className={`
          h-[48px] w-full ${search ? 'rounded-t-[28px] border-t-[1px]' : 'rounded-[28px]'} border-gray-border px-32
          transition-colors duration-300 placeholder:font-poppins
          placeholder:text-[16px] text-gray-700 placeholder-gray-800 hover:border-blue
          outline-none
        `}
      />
      {endAdornment}
    </fieldset>
  );
}
