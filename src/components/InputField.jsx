import Input from "./Input";

const InputField = ({
  labelTitle,
  id,
  placeholder,
  type,
  isError,
  errorMessage,
  register,
  ...props
}) => {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={id} className="text-green-300 text-xl font-medium">
        {labelTitle} :{" "}
      </label>

      <Input
        {...props}
        register={register}
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
};

export default InputField;
