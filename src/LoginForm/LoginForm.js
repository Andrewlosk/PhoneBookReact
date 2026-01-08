import css from "./LoginForm.module.css";

import { login } from "../redux/auth/operations";

import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await dispatch(login({ email, password }));

    if (login.fulfilled.match(result)) {
      alert('success')
    }

    if (login.rejected.match(result)) {
      const errorMessage = result.payload || "Unknown error";
      alert("error", errorMessage)
    }
    form.reset()
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
