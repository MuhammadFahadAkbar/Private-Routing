const Register = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <label htmlFor="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" name="confirm_password" />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;