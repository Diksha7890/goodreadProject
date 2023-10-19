import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import axios from "axios";
import React, { useState } from "react";

const RegistrationPage = () => {
  const [message, setMessage] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          setMessage({
            textMessage: "Succesfully Registered",
            alertClass: "alert alert-success",
          });
          
        },
        (error) => {
          setMessage({
            textMessage: "Try Again",
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("firstname is required"),
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email address"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(3, "password should have at least 3 chracters")
      .max(6, "password should have max 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="wrapper">
              <div className={message.alertClass} role="alert">
                {message.textMessage}
              </div>
              <h2 className="text-center">Register</h2>
              <hr />
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label for="firstName">FirstName</label>
                  <input
                    type="text"
                    placeholder="enter your first name"
                    className={
                      formik.touched.firstName && formik.errors.firstName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    name="firstName"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span className="text-danger">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>

                <div className="form-group">
                  <label for="email">Email </label>
                  <input
                    type="email"
                    placeholder="enter your Email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-danger">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="mobile">mobile</label>
                  <input
                    type="text"
                    placeholder="enter your mobile"
                    className={
                      formik.touched.mobile && formik.errors.mobile
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <span className="text-danger">{formik.errors.mobile}</span>
                  ) : null}
                </div>

                <div className="form-group">
                  <label for="password">Password </label>
                  <input
                    type="password"
                    placeholder="enter your Password"
                    className={
                      formik.touched.password && formik.errors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className="text-danger">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <br />
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block"
                  disabled={!formik.isValid}
                />
              </form>
              <br />
              <p className="text-center">
                Already Registered? <Link to={"/login"}>Login here</Link>
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
export default RegistrationPage;
