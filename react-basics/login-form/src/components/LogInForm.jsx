import "./LogInForm.css";
import { useState } from "react";

export function LogInForm() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input placeholder="Email" className="login-input" />
      </div>

      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="login-input"
        />
        <button className="show-button" onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button className="login-button">Login</button>
      <button className="login-button">SignUp</button>
    </>
  );
}
