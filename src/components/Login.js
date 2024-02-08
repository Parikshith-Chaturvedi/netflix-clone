import React, { useEffect, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const toggleSigninForm = () => {
    setIsSignin(!isSignin);
  };
  return (
    <>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form className="w-4/12 absolute p-20 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-3">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="User Email"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />
        <button className="p-2 my-4 bg-red-600 w-full rounded-md ">
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        {isSignin ? (
          <p className="cursor-pointer" onClick={toggleSigninForm}>
            New to Netflix? Sign Up
          </p>
        ) : (
          <p className="cursor-pointer" onClick={toggleSigninForm}>
            Already registered? Sign In
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
