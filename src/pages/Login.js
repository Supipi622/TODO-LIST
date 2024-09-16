import React, { useState } from "react"; 
import { useAuth } from "../components/AuthContext"; // For authentication
import { Formik, Form, Field, ErrorMessage } from "formik"; // For form handling
import * as Yup from "yup"; // For validation
import { Link } from "react-router-dom";
import "../style/pageStyle/Login.css";

const Login = () => {
  const { login } = useAuth(); // Access login function from AuthContext
  const [error, setError] = useState(""); // State for handling login errors

  // Form validation schema using Yup
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      await login(values.email, values.password); // Login the user
      // Redirect to Todo list or other protected routes
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <h1>Login to Your Account</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="right">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {() => (
              <Form className="form_container">
                <h1>Login</h1>
                
                {/* Email Field */}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                />
                <ErrorMessage name="email" component="div" className="error_msg" />

                {/* Password Field */}
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <ErrorMessage name="password" component="div" className="error_msg" />

                {/* Display login error */}
                {error && <div className="error_msg">{error}</div>}

                {/* Submit Button */}
                <button type="submit" className="green_btn">
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
