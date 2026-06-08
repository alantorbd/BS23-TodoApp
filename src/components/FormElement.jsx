import { forwardRef } from "react";
import Input from "./Input";

const FormElement = forwardRef(
  (
    { labelTitle, id, placeholder, type, isError, errorMessage, ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col mt-2">
        <label htmlFor={id} className="text-green-300 text-xl font-medium">
          {labelTitle} :{" "}
        </label>

        <Input
          {...props}
          ref={ref}
          id={id}
          placeholder={placeholder}
          type={type}
        />

        {isError && (
          <p className="text-red-600 text-md font-normal p-0 m-0">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

export default FormElement;
