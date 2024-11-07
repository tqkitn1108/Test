import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MailList = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("⚠️ Invalid email address")
        .required("⚠️ Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mail bg-[#033e9c] py-10 px-4 text-white text-center">
      <h1 className="mailTitle text-4xl font-bold mb-2">
        Save time, save money!
      </h1>
      <span className="mailDesc text-lg mb-4 block">
        Sign up and we'll send the best deals to you
      </span>

      <form onSubmit={formik.handleSubmit} className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-4 py-2 w-128 text-black border-none focus:outline-none"
        />
        <button
          type="submit"
          className="px-2 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none"
        >
          Subscribe
        </button>
      </form>

      {formik.touched.email && formik.errors.email && (
        <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
      )}
    </div>
  );
};

export default MailList;
