import css from "./RegisterForm.module.css";


import { register } from "../redux/auth/operations";
import { useDispatch } from "react-redux";




export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await dispatch(register({ name, email, password }));



    if (register.fulfilled.match(result)) {
        alert('success')
    }

    if (register.rejected.match(result)) {
      const errorMessage = result.payload || 'Unknown error';
        alert('error', errorMessage)
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>

      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>

      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
