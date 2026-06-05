import z from "zod";

const loginSchema = z
  .object({
    name: z.string().min(1, "Name is required").trim(),
    email: z
      .string()
      .nonempty("Email is required")
      .includes("@", "Email do not contain @")
      .regex(/.com/, "Email must be contain .com")
      .regex(/.*gmail.*/, "Email support only gmail")
      .email("Email is incorrect")

      .trim(),
    mobile: z
      .string()
      .trim()
      .min(1, "Mobile number is required")
      .regex(/[0-9]+/, "Mobile only take number")
      .regex(/^01\d*$/, "Mobile number Start with 01")
      .length(11, "Mobile number needs 11 digit"),
    password: z
      .string()
      .nonempty("Pasword is required")
      .min(6, { message: "Password must be at least 6 digit" })
      .nonempty("Password is required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default loginSchema;
