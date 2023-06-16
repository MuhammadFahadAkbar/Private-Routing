import { useContext } from "react";
import { AuthContext } from "../../App";
import { redirect } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas/LoginSchema";
import { useAuth0 } from "@auth0/auth0-react";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: () => {
        setIsLoggedIn(true);
        console.log("Values", values);
        redirect("/");
      },
    });

  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1>Log In</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
        <br />
        <button type="submit">Login</button>
      </form> */}
    </>
  );
};

export default Login;
