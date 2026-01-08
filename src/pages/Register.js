// import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register Form</title>
      </Helmet>
      <h1>Register page</h1>

      <RegisterForm />
    </>
  );
}