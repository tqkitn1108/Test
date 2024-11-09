import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../navbar/Navbar";

const Login = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-white h-12"></div>

      <div className="container mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className="bg-white my-5 mx-auto rounded-lg max-w-md shadow-lg">
            <div className="p-5 w-full flex flex-col">
              <h2 className="font-bold mb-2 text-center text-2xl">Sign in</h2>
              <div className="mb-3">
                <label className="mb-1 block text-gray-700" htmlFor="email">
                  Email address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input rounded border p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="mb-1 block text-gray-700" htmlFor="password">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input rounded border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input type="checkbox" id="flexCheckDefault" className="mr-2" />
                <label htmlFor="flexCheckDefault">Remember password</label>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="btn btn-primary w-full py-2 text-white bg-blue-600 rounded"
                >
                  Login
                </button>
              </div>

              <hr className="my-4" />

              <div className="flex justify-center">
                <a
                  className="no-underline w-full py-2 text-white bg-red-600 rounded flex justify-center items-center"
                  href="API Google here"
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  Sign in with Google
                </a>
              </div>

              <div className="flex justify-center mt-3">
                <a
                  className="no-underline w-full py-2 text-white bg-blue-700 rounded flex justify-center items-center"
                  href="API Facebook here"
                >
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Sign in
                  with Facebook
                </a>
              </div>
              <p className="text-center text-gray-500 mt-5">
                Don't have an account?{" "}
                <Link to="/signup" className="font-bold text-black underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
