import { useState } from "react";
import RegisterForm from "../Components/registerForm";
import userservices from "../Services/userservices";

export default function SignUp() {
  const [registered, setRegistered] = useState(false);

  const onRegister = (username, password) => {
    console.log("onRegister", username, password);
    let userData = {
      username,
      password,
    };
    const user = userservices.registerUser(userData).then((res) => {
      console.log("user", res.data.code);
      if (res.data.code === 200) {
        setRegistered(true);
      }
    });
  };

  return (
    <div className="Absolute-Center">
      <div className="text-center mt-1">
        <h1>Sign Up</h1>
      </div>
      <div>
        <RegisterForm onRegister={onRegister} />
      </div>
      {registered && (
        <div className="text-center mt-1">
          <h3>Account created successfully</h3>
        </div>
      )}
    </div>
  );
}
