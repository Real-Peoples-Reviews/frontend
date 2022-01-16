import React from "react";
import { Formik } from "formik";
import contactSchema from "../../../schemas/contact-schema";
import Header from "../../common/Header";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import Footer from "../../common/footer";
import { CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from "cdbreact";

const Contact = () => {
	return (
		<div>
			<Header />
			<div className="global-body">
				<Sidebar />
				<div className="content-container">
					<Formik
						validationSchema={contactSchema}
						onSubmit={(e) => console.log(e)}
						initialValues={{
							name: "",
							email: "",
							phone: "",
							message: "",
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
							<CDBContainer>
								<h1>Contact</h1>
								<p className="h5">
									We'd love to hear from you. Fill out the form below and click
									Send!
								</p>
								<CDBCard style={{ width: "45vw" }}>
									<CDBCardBody className="mx-4">
										<Form onSubmit={handleSubmit}>
											<Form.Group>
												<label
													htmlFor="defaultContactName"
													className="form-label"
												>
													Your name
												</label>
												<Form.Control
													className="form-control"
													required
													type="text"
													name="name"
													value={values.name}
													onChange={handleChange}
													isValid={!!errors.name}
												/>
												<Form.Control.Feedback>
													{errors.name}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group>
												<label
													htmlFor="defaultContactEmail"
													className="form-label"
												>
													Your email
												</label>
												<Form.Control
													className="form-control"
													required
													type="email"
													name="email"
													value={values.email}
													onChange={handleChange}
													isValid={!!errors.email}
												/>
												<Form.Control.Feedback>
													{errors.email}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group>
												<label
													htmlFor="defaultPhoneNumber"
													className="form-label"
												>
													Your phone number
												</label>
												<Form.Control
													className="form-control"
													type="text"
													name="phone"
													value={values.phone}
													onChange={handleChange}
												/>
											</Form.Group>
											<Form.Group>
												<label
													htmlFor="defaultContactMessage"
													className="form-label"
												>
													Your message
												</label>
												<Form.Control
													className="form-control"
													required
													as="textarea"
													name="message"
													value={values.message}
													onChange={handleChange}
													isValid={!!errors.message}
												/>
												<Form.Control.Feedback>
													{errors.message}
												</Form.Control.Feedback>
											</Form.Group>
											<div className="mb-5">
												<CDBBtn
													type="submit"
													color="dark"
													className="btn-block my-3 mx-0"
												>
													Send
													<CDBIcon far icon="paper-plane" />
												</CDBBtn>
											</div>
										</Form>
									</CDBCardBody>
								</CDBCard>
							</CDBContainer>
						)}
					</Formik>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Contact;
