import { useForm } from "react-hook-form";
import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import loginSchema from "../schemas/loginSchema";
import { useNavigate } from "react-router";

export default function LogInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log(data);
    navigate("./home");
  };
  return (
    <div className="mx-0 md:mx-5 grow flex justify-center items-center w-full  h-full">
      <div className="bg-green-950  p-2 md:p-10 md:min-w-2xl rounded-2xl">
        <h2 className="text-green-200 text-3xl font-semibold text-center  py-2">
          Enter your login credentials
        </h2>
        <div className=" border-green-800 border-b-2 border-dashed w-full mb-3" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <InputField
            register={register}
            id="name"
            placeholder="eg: Mrs Khan"
            type="text"
            labelTitle="Enter your name"
            isError={errors.name}
            errorMessage={errors.name?.message}
          />
          <InputField
            register={register}
            id="email"
            placeholder="eg: abc@gmail.com"
            type="text"
            labelTitle="Enter your email"
            isError={errors.email}
            errorMessage={errors.email?.message}
          />

          <InputField
            register={register}
            id="mobile"
            placeholder="eg: 01712345678"
            type="text"
            labelTitle="Enter your mobile number"
            isError={errors.mobile}
            errorMessage={errors.mobile?.message}
          />

          <InputField
            register={register}
            id="password"
            placeholder="eg: password@123"
            type="password"
            labelTitle="Enter your password"
            isError={errors.password}
            errorMessage={errors.password?.message}
          />

          <InputField
            register={register}
            id="confirmPassword"
            placeholder="eg: password@123"
            type="password"
            labelTitle="Re-enter your password "
            isError={errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />

          <Button
            type="submit"
            title="Log in"
            className={
              "bg-gray-950 hover:bg-greay-900 text-green-200 font-medium mt-4"
            }
          />
        </form>
      </div>
    </div>
  );
}
