import * as Yup from "yup";

export const RegsiterSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(5).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref("password")], "Password must match"),
});
