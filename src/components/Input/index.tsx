import type { InputHTMLAttributes } from 'react';
import { cn } from '@/utils/classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: JSX.Element;
  search?: boolean;
}

export const Input = ({ endAdornment, className, search = false, ...props }: InputProps) => {
  return (
    <fieldset className="relative w-full">
      <input
        type="text"
        className={cn(`
          h-[48px] w-full border-gray-border px-32
          transition-colors duration-300 placeholder:font-poppins
          placeholder:text-[16px] text-gray-700 placeholder-gray-800 hover:border-blue
          outline-none ${search ? 'rounded-t-[28px] border-t-[1px]' : 'rounded-[28px]'}
        `, className)}
        {...props}
      />
      {endAdornment}
    </fieldset>
  );
}
