import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Must be an email")
    .required("Please enter your email"),
  password: Yup.string().min(5).max(20).required("Please enter your password"),
});
