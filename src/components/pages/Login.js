import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import schema from "../../schemas/schema";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
	let navigate = useNavigate();

	return (
		<Formik
			validationSchema={schema}
			onSubmit={(e) => {
				navigate('/home')
				console.log(e)
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
				<div className="container space-2">
					<Form onSubmit={handleSubmit}>
						<Form.Group className="form-group">
							<div className="heading">
								<h2>
									Welome
									<span> back </span>
								</h2>
								<p>Sign in to manage your account.</p>
							</div>
							<Form.Label>EMAIL ADDRESS</Form.Label>
							<Form.Control
								required
								type="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								isValid={touched.email && !errors.email}
							/>
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>
								<span>PASSWORD</span>
							</Form.Label>
							<Link to="/">
								<span> Forgot your password? </span>
							</Link>
							<Form.Control
								required
								type="text"
								name="password"
								value={values.password}
								onChange={handleChange}
								isValid={touched.password && !errors.password}
							/>
						</Form.Group>
						<Form.Group className="form-group">
							<div className="custom-checkbox">
								<Form.Check name="remember" label="Remember Me" />
							</div>
						</Form.Group>
						<div className="mb-5">
							<div className="col-6">
								<span className="small text-muted">Don't have an account?</span>
								<Link to="/register">Sign Up</Link>
							</div>
							<div className="col-6 text-right">
								<Button type="submit" variant="primary" className="btn">
									Sign In
								</Button>
							</div>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default Login;
