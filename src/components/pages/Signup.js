import React from "react";
import { CDBInput, CDBCheckbox, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from "cdbreact";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import schema from "../../schemas/schema";
import Form from "react-bootstrap/Form";
import Header from "../common/Header";
import Footer from "../common/footer";
import Sidebar from "./HomePages/Sidebar";
import axios from "axios"

const Signup = () => {
    let navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="global-body">
                <Sidebar />
                <Formik
                    validationSchema={schema}
                    onSubmit={(e) => {
                        axios()
                            .post("http://localhost:8000/users/register", e)
                            .then((res) => {
                                localStorage.setItem("token", res.data.token);
                                navigate("/home");
                            })
                            .catch((err) => {
                                console.log("Error:", err);
                            });
                    }}
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                        phone_number: "",

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
                            <CDBContainer>
                                <CDBCard style={{ width: "30rem" }}>
                                    <div className="text-center text-white" style={{ background: "black" }}>
                                        <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
                                    </div>
                                    <CDBCardBody className="mx-4">
                                        <Form onSubmit={handleSubmit}>
                                            <div className="form-row mb-n4">
                                                <div className="col"><CDBInput label="First name" type="text" /></div>
                                                <div className="col"><CDBInput label="Last name" type="text" /></div>
                                            </div>
                                            <CDBInput label="E-mail" type="email" />
                                            <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
                                            <CDBInput label="Password" type="password" />
                                            <CDBInput label="Phone number" type="tel" />
                                            <p className="text-muted text-center small mt-n4">Optional - for two step authentication</p>
                                            <div className="d-flex justify-content-center align-items-center mt-4">
                                                <CDBCheckbox className="mr-2" />
                                                <p className="m-0">Subscribe to our newsletter</p>
                                            </div>
                                            <CDBBtn
                                                color="dark"
                                                outline
                                                className="btn-block my-3 mx-0" >
                                                Sign up
                                            </CDBBtn>
                                            <p className="text-center"> or sign up with</p>
                                            <div className="row mb-3 d-flex justify-content-center">
                                                <CDBBtn
                                                    color="white"
                                                    className="m-0"
                                                    outline
                                                >
                                                    <CDBIcon fab icon="facebook-f" />
                                                </CDBBtn>
                                                <CDBBtn
                                                    color="white"
                                                    className="m-0"
                                                    outline
                                                >
                                                    <CDBIcon fab icon="twitter" />
                                                </CDBBtn>
                                                <CDBBtn
                                                    color="white"
                                                    className="m-0"
                                                    outline
                                                >
                                                    <CDBIcon fab icon="linkedin-in" />
                                                </CDBBtn>
                                                <CDBBtn
                                                    color="white"
                                                    className="m-0"
                                                    outline
                                                >
                                                    <CDBIcon fab icon="github" />
                                                </CDBBtn>
                                            </div>
                                            {/* <p className="text-center m-0">Already have an account? <CDBLink className="d-inline p-0" to="#">Sign In</CDBLink></p>
                                        <hr />
                                        <p className="text-center">By clicking <em>Sign up</em> you agree to our <CDBLink className="d-inline p-0" to="#">terms of service</CDBLink></p> */}
                                        </Form>
                                    </CDBCardBody>
                                </CDBCard>
                            </CDBContainer>
                        </div>
                    )}
                </Formik >
            </div>
            <Footer />
        </div >
    );
};
export default Signup;
