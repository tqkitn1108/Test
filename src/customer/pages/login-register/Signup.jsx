import React from 'react';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div>
      <div className='fixed-navbar'><Navbar /></div>
      <div className="bg-light h-24"></div>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={() => {}}
      >
        {formik => (
          <section className="h-screen bg-light">
            <div className="flex items-center h-full">
              <div className="container mx-auto h-30">
                <div className="flex justify-center items-center h-full">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-md">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Create an account</h2>
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2" htmlFor="fullName">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              onChange={formik.handleChange}
                              value={formik.values.fullName}
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2" htmlFor="email">
                              Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                          </div>

                          <div className="mb-4 relative">
                            <label className="block text-lg font-semibold mb-2" htmlFor="password">
                              Password <span className="text-red-500">*</span>
                            </label>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              name="password"
                              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-gray-500"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                          </div>

                          <div className="mb-4 relative">
                            <label className="block text-lg font-semibold mb-2" htmlFor="confirmPassword">
                              Repeat Password <span className="text-red-500">*</span>
                            </label>
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              id="confirmPassword"
                              name="confirmPassword"
                              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              onChange={formik.handleChange}
                              value={formik.values.confirmPassword}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-gray-500"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                          </div>

                          <div className="mb-6 flex items-center">
                            <input
                              className="mr-2 leading-tight"
                              type="checkbox"
                              value=""
                              id="form2Example3cg"
                            />
                            <label className="text-gray-700" htmlFor="form2Example3g">
                              I agree all statements in{' '}
                              <a href="#!" className="text-blue-600 underline">
                                Terms of service
                              </a>
                            </label>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                            >
                              Register
                            </button>
                          </div>
                          <p className="text-center text-gray-500 mt-4">
                            Have already an account?{' '}
                            <Link to="/login" className="text-blue-600 font-semibold">
                              Login here
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
      <div className="bg-light h-24"></div>
    </div>
  );
}

export default Signup;
