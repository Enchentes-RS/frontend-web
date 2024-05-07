import type { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: JSX.Element;
  search?: boolean;
}

export const Input = ({
  endAdornment,
  className,
  search = false,
  ...props
}: InputProps) => {
  return (
    <fieldset className="relative w-full">
      <input
        type="text"
        className={cn(
          'placeholder:font-poppins h-[48px] w-full border-gray-200 px-32',
          'text-gray-700 placeholder-gray-800 outline-none transition-colors',
          'duration-300 placeholder:text-base hover:border-gray-200',
          search ? 'rounded-t-[28px] border-t' : 'rounded-[28px]',
          className,
        )}
        {...props}
      />
      {endAdornment}
    </fieldset>
  );
};
