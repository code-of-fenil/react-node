import { useState } from "react";

export default function RegisterForm({ onRegister }) {
  const [userName, setuserName] = useState("");
  const [password, setPasswrod] = useState("");
  console.log("userName", userName, password);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event", userName, password);
    onRegister(userName, password);
  };
  return (
    <>
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={(event) => {
                setuserName(event.target.value.trim());
              }}
              // style={{
              //   width: "80px",
              // }}
            />
          </div>
          {/* {userName.length > 0 && userName !== "" && (
            <div>
              <p>Please provide username</p>
            </div>
          )} */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) => {
                setPasswrod(event.target.value.trim());
              }}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn btn-outline-dark justify-content-center mt-2"
              disabled={userName !== ""}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
