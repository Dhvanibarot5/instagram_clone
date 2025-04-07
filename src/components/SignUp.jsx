import React from "react";
import logo from "../images/logo.png";
import "./SignUp.css";
import "./SignIn";

function SignUp() {
  return (
    <div className="signUp">
      <div className="container w-[380px]">
        <div className="form flex flex-col justify-center items-center text-center">
          <img src={logo} alt="" className="signUpLogo" />
          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <div className="w-[80%]">
            <input type="email" name="email" id="email" placeholder="Email" className="border border-gray-400 rounded-md mb-2 p-1" required />
          </div>
          <div className="w-[80%]">
            <input type="text" name="name" id="name" placeholder="Full Name" className="border border-gray-400 rounded-md mb-2 p-1" />
          </div>
          <div className="w-[80%]">
            <input type="text" name="username" id="username" placeholder="Username" className="border border-gray-400 rounded-md mb-2 p-1" />
          </div>
          <div className="w-[80%]">
            <input type="password" name="password" id="password" placeholder="Password" className="border border-gray-400 rounded-md p-1" />
          </div>
          <p className="py-3" style={{ fontSize: "12px", margin: "3px 0px" }}>
            By signing up, you agree to out Terms, <br /> privacy policy and cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" className="" />
        </div>
        <div className="form2">
          Already have an account ?{" "}
          <Link to="/signin">
            <span className="text-blue-800 cursor-pointer"> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
