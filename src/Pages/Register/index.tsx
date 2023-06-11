import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log("Values", values);
    },
  });
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
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
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={values.confirm_password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
