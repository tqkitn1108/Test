import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/ApiAuthService";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\sÀ-ỹ]+$/, "Name must contain only letters and spaces")
    .matches(/^(?!.*\s{2})/, "Name must not contain consecutive spaces")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .test(
      "no-full-spaces",
      "Password must not contain only spaces",
      (value) => value.trim() !== ""
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  agreement: Yup.boolean().oneOf(
    [true],
    "You must agree to the Terms of Service"
  ),
});

const BusinessSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  {/*delete this section */}
  const customStyle = {
    input: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
    },
    label: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "1rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    if (formik.isValid) {
      values.role = "HOTEL";
      setLoading(true);
      try {
        const response = await registerUser(values);
        setSuccessMessage(response.data);
        setErrorMessage("");
      } catch (error) {
        setSuccessMessage("");
        setErrorMessage(`${error.response.data.detail}`);
      }
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <div className="fixed-navbar">{/* Navbar component */}</div>
      <div className="bg-gray-100 h-24"></div>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div>
          {loading} {/* LoadingSpinner here */}
          <section className="h-screen bg-gray-100">
            <div className="flex items-center h-full bg-gradient-to-b from-blue-200 to-indigo-300">
              <div className="container mx-auto h-1/3">
                <div className="flex justify-center items-center h-full">
                  <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white shadow-lg rounded-xl p-8">
                      <h3 className="uppercase text-center mb-4 text-lg font-bold">
                        Tạo tài khoản đối tác
                      </h3>
                      {errorMessage && (
                        <p className="text-red-600 bg-red-100 p-4 rounded mb-4">
                          {errorMessage}
                        </p>
                      )}
                      {successMessage && (
                        <>
                          <p className="text-green-600 bg-green-100 p-4 rounded mb-4">
                            {successMessage}
                          </p>
                          <div className="flex justify-center">
                            <button
                              onClick={() => navigate("/login")}
                              className="btn w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                            >
                              Click here to redirect to the login
                            </button>
                          </div>
                        </>
                      )}
                      {!successMessage && (
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-4">
                            <label
                              htmlFor="fullName"
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              className={`w-full p-2 border ${
                                formik.touched.fullName &&
                                formik.errors.fullName
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.fullName}
                            />
                            {formik.touched.fullName &&
                              formik.errors.fullName && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.fullName}
                                </div>
                              )}
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className={`w-full p-2 border ${
                                formik.touched.email && formik.errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                              <div className="text-red-500 text-sm mt-1">
                                {formik.errors.email}
                              </div>
                            )}
                          </div>

                          <div className="mb-4 relative">
                            <label
                              htmlFor="password"
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Password <span className="text-red-500">*</span>
                            </label>
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              className={`w-full p-2 border ${
                                formik.touched.password &&
                                formik.errors.password
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                              />
                            </button>
                            {formik.touched.password &&
                              formik.errors.password && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.password}
                                </div>
                              )}
                          </div>

                          <div className="mb-4 relative">
                            <label
                              htmlFor="confirmPassword"
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Repeat Password{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              className={`w-full p-2 border ${
                                formik.touched.confirmPassword &&
                                formik.errors.confirmPassword
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.confirmPassword}
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                              />
                            </button>
                            {formik.touched.confirmPassword &&
                              formik.errors.confirmPassword && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.confirmPassword}
                                </div>
                              )}
                          </div>

                          <div className="flex items-center mb-5">
                            <input
                              type="checkbox"
                              id="form2Example3cg"
                              className="mr-2"
                            />
                            <label
                              htmlFor="form2Example3cg"
                              className="text-gray-600"
                            >
                              I agree all statements in{" "}
                              <a href="#!" className="text-blue-500 underline">
                                Terms of service
                              </a>
                            </label>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
                              disabled={!formik.isValid}
                            >
                              Register
                            </button>
                          </div>
                          <p className="text-center text-gray-600 mt-5">
                            Have already an account?{" "}
                            <Link
                              to="/login"
                              className="text-blue-500 underline"
                            >
                              Login here
                            </Link>
                          </p>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Formik>
      <div className="bg-gray-100 h-24"></div>
    </div>
  );
};

export default BusinessSignup;
