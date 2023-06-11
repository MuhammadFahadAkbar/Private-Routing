import { useFormik } from "formik";
import { RegsiterSchema } from "../../schemas/RegisterSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegsiterSchema,
      onSubmit: (values, action) => {
        console.log("Values", values);
        action.resetForm();
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
        {errors.name && touched.name && <p>{errors.name}</p>}
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
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={values.confirm_password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.confirm_password && touched.confirm_password && (
          <p>{errors.confirm_password}</p>
        )}
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
