import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


 
const LoginPage = () => {
  let navigate=useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [message, setMessage] = useState({
    textMessage: "",
    alertClass: "",
  });

  const onSubmit = (values) => {
    axios
    .post(
      "https://orca-app-jhg4l.ondigitalocean.app/api/auth/login",
      values
    )
    .then(
      (response) => {
        setMessage({
          textMessage: 'login successfull, thank you',
          alertClass: "alert alert-success",
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/')
      },
      (error) => {
        setMessage({
          textMessage: error.response.data.message,
          alertClass: "alert alert-danger",
        });
      }
    )
    .catch((error) => console.log(error));

  };

  const validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("please enter valid email address"),

    password: Yup.string()
      .required("password is required")
      .min(3, "password should at least 6 character long")
      .max(6, "password maximum length is 10 character"),
  });
 
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
          <div className={message.alertClass} role="alert">{message.textMessage}</div>

            <h2 className="text-center">Login</h2>
            <hr/>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="enter your email"
                        name="email"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="enter your password"
                        name="password"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                      value={"Login"}
                    ></input>
                  </Form>
                );
              }}
            </Formik>
            <br></br>
            <p className="text-center">
              New user ? <Link to={"/registration"}> register here </Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
