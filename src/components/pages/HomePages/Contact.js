import React from "react";
import { Formik } from "formik";
import contactSchema from "../../../schemas/contact-schema";
import Sidebar from "./Sidebar";
import {
	CDBInput,
	CDBCard,
	CDBCardBody,
	CDBIcon,
	CDBBtn,
	CDBContainer,
} from "cdbreact";

const Contact = () => {
	return (
		<div className="global-body">
			<Sidebar />
			<CDBContainer className="container">
				<Formik
					validationSchema={contactSchema}
					onSubmit={console.log}
					initialValues={{
						name: "",
						email: "",
						number: "",
						message: "",
					}}
				></Formik>

				<h1>Contact</h1>
				<p>
					We'd love to hear from you. Fill out the form below and click Send!
				</p>
			</CDBContainer>
		</div>
	);
};

export default Contact;
