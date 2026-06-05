import { forwardRef } from "react";
import cn from "../utils/cn";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "mt-2 p-2 placeholder:text-green-700 placeholder:text-xl text-xl text-green-400  border border-green-500 outline-none focus:border-green-100 focus:border",
        className,
      )}
      {...props}
    />
  );
});

export default Input;
