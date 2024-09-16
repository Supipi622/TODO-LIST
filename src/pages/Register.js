import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Importing useAuth from AuthContext
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../style/pageStyle/Register.css";

const Register = () => {
  const [error, setError] = useState("");
  const { register, login } = useAuth(); // Access register and login functions from AuthContext
  const navigate = useNavigate();

  // Form validation schema using Yup
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required"),
  });

  const handleRegister = async (values) => {
    try {
      await register(values.email, values.password); 
      login(values.email, values.password); 
      navigate("/todos"); 
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Log In
            </button>
          </Link>
        </div>
        <div className="right">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            {() => (
              <Form className="form_container">
                <h1>Create Account</h1>
                {/* Name Field */}
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input"
                />
                <ErrorMessage name="name" component="div" className="error_msg" />
                
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

                {/* Display registration error */}
                {error && <div className="error_msg">{error}</div>}

                {/* Submit Button */}
                <button type="submit" className="green_btn">
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
