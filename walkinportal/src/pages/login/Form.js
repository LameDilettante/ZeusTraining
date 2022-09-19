import React from "react";
import preview from "../../Assets/preview.svg";
import checkbox_checked from "../../Assets/checkbox-checked.svg";
export default function Form() {
  return (
    <form action="" class="form-section">
      <h2>Log In With Quantum</h2>

      <input type="text" class="username" placeholder="Email ID*" />
      <a href="#" class="forget-username">
        FORGOT USERNAME?
      </a>
      <div class="password-wrapper">
        <input type="text" class="password" placeholder="Password*" />
        <img src={preview} alt="preview the password" class="preview" />
      </div>
      <a href="#" class="forget-password">
        FORGOT PASSWORD?
      </a>

      <div class="checkbox-wrapper">
        <img src={checkbox_checked} alt="checkbox" class="checked-checkbox" />
        <h3>Remember Me</h3>
      </div>
      <button type="submit" class="login-button">
        LOG IN
      </button>
    </form>
  );
}
