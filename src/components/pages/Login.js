import React from "react";
import { CDBCard, CDBBtn, CDBContainer, CDBCardBody, CDBIcon } from "cdbreact";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import schema from "../../schemas/schema";
import Form from "react-bootstrap/Form";
import Header from "../common/Header";
import Footer from "../common/footer";
import Sidebar from "./HomePages/Sidebar";
import axios from "axios"

const Login = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="global-body">
        <Sidebar />
        <Formik
          validationSchema={schema}
          onSubmit={(e) => {
            console.log('ON SUBMIT', e);
            axios
              .post("http://localhost:8000/users/login", e)
              .then((res) => {
                console.log(res)
                localStorage.setItem("token", res.data.token);
                navigate("/home");
              })
              .catch((err) => {
                console.log("Error:", err);
              });
          }}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleReset,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <div>

              <CDBContainer className="container space-2">
                <CDBCard style={{ width: "30rem" }}>
                  <CDBCardBody className="mx-4">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="form-group">
                        <div className="text-center mt-4 mb-2" id="heading">
                          <p className="h4">
                            Welome
                            <span> back </span>
                          </p>
                          <p>Sign in to manage your account.</p>
                        </div>
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                        />
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Control
                          required
                          type="text"
                          name="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                        />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                          <Form.Check name="remember" />
                          <p className="m-0">Remember me</p>
                          <Link to="/">Forgot Password?</Link>
                        </div>
                      </Form.Group>

                      <div className="mb-5">
                        <CDBBtn
                          type="submit"
                          color="dark"
                          className="btn-block my-3 mx-0"
                        >
                          Sign In
                        </CDBBtn>
                      </div>
                      <div>
                        <p className="text-center">
                          Not a member?
                          <Link className="d-inline p-0" to="/signup">
                            Register
                          </Link>
                        </p>
                      </div>
                      <div>
                        <p className="text-center"> or sign in with</p>
                        <CDBBtn color="white" style={{ boxShadow: "none" }}>
                          <CDBIcon fab icon="facebook" />
                        </CDBBtn>
                        <CDBBtn color="white" style={{ boxShadow: "none" }}>
                          <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn color="white" style={{ boxShadow: "none" }}>
                          <CDBIcon fab icon="google" />
                        </CDBBtn>
                      </div>
                    </Form>
                  </CDBCardBody>
                </CDBCard>
              </CDBContainer>
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


