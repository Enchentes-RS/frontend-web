import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: JSX.Element;
}

export const Input = ({ endAdornment, ...rest }: InputProps) => {
  return (
    <fieldset className="relative w-full">
      <input
        {...rest}
        type="text"
        className="
                h-[48px] w-full  rounded-full  border-[1px] border-gray-border  px-32
                transition-colors duration-300 placeholder:font-poppins
                placeholder:text-[16px] text-gray-700 placeholder-gray-800 hover:border-blue
                focus:border-[2px] focus:border-blue outline-none       
            "
      />
      {endAdornment}
    </fieldset>

  );
};
