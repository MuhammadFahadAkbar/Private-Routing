import { useContext } from "react";
import { AuthContext } from "../../App";
import { redirect } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      setIsLoggedIn(true);
      console.log("Values", values);
      redirect("/");
    },
  });
  
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
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
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
