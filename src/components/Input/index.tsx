import type { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: JSX.Element;
}

export const Input = ({ endAdornment, className, ...props }: InputProps) => {
  return (
    <fieldset className="relative w-full">
      <input
        type="text"
        className={cn(
          'border-gray-border placeholder:font-poppins hover:border-blue',
          'focus:border-blue h-[4.5rem] w-full rounded-full border-[1px] px-32',
          'transition-colors duration-300 placeholder:text-[1.6rem] focus:border-[2px]',
          className,
        )}
        {...props}
      />
      {endAdornment}
    </fieldset>
  );
};
