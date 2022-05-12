import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../actions";
function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email")
      .required("email cannot be empty"),
    password: Yup.string().required("password cant be empty"),
  });

  let handleSubmit = (values) => {
    setLoginData(values);
    console.log(values);
    login(values);
  };

  let login = (values) => {
    console.log(values);
    let userName = "monu@gmail.com";
    let pwd = "hello123";
    if (userName === values.email && pwd === values.password) {
      dispatch(signin());
      navigate("/");
    } else {
      alert("login failed");
    }
    let requestBody = {
      email: values.email,
      password: values.password,
    };
    axios.post("https://localhost:8080/login", requestBody).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={signinSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
