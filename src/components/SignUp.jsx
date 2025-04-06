import React from "react";
import logo from "../images/logo.png";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="container w-[350px]">
        <div className="form flex flex-col justify-center items-center text-center">
          <img src={logo} alt="" className="signUpLogo"/>
          <p className="loginPara">
            Sign up to see photos and videos  from your friends.
          </p>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" className="border border-gray-400 rounded-md mb-2 p-1" required />
          </div>
          <div>
            <input type="text" name="name" id="name" placeholder="Full Name" className="border border-gray-400 rounded-md mb-2 p-1" />
          </div>
          <div>
            <input type="text" name="username" id="username" placeholder="Username" className="border border-gray-400 rounded-md mb-2 p-1" />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" className="border border-gray-400 rounded-md p-1" />
          </div>
          <p className="py-3">
            By signing up, you agree to out Terms, <br /> privacy policy and cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" className="bg-gray-400 px-2 py-1 rounded" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
