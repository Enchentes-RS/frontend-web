import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  EndAdornment?: JSX.Element;
}

const Input: React.FC<InputProps> = ({
  EndAdornment,
  ...rest
}): JSX.Element => {
  return (
    <fieldset className="relative w-full">
      <input
        {...rest}
        type="text"
        className="
                h-[4.5rem] w-full  rounded-full  border-[1px] border-gray-border  px-32
                transition-colors duration-300 placeholder:font-poppins
                placeholder:text-[1.6rem] hover:border-blue
                focus:border-[2px] focus:border-blue         
            "
      />
      {EndAdornment}
    </fieldset>
  );
};

export default Input;
