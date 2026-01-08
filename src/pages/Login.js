
import { LoginForm } from "../LoginForm/LoginForm";
import { Helmet } from "react-helmet";


export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login Form</title>
      </Helmet>
      <h1>Login page</h1>
      <LoginForm/>
    </>
  );
}
