import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../schemas/schema";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onHandleSubmission = (e) => {
		console.log(e);
		reset();
	};

	return (
		<div className="container space-2">
			<form onSubmit={handleSubmit(onHandleSubmission)}>
				<div className="form-group">
					<div className="heading">
						<h2>
							Welome
							<span> back </span>
						</h2>
						<p>Sign in to manage your account.</p>
					</div>
					<label>
						EMAIL ADDRESS
						<input {...register("email")} placeholder="email" type="text" required />
					</label>
				</div>
				<div className="form-group">
					<label>
						<span>PASSWORD</span>
					</label>
					<Link to="/">
						<span> Forgot your password? </span>
					</Link>
					<input {...register("password")} placeholder="password" type="password" required />
				</div>
				<div className="form-group">
					<div className="custom-checkbox">
						<input
							type="checkbox"
							name="remember"
							className="custom-control-input"
						/>
						<label for="remember" className="custom-control-label">
							Remember Me
						</label>
					</div>
				</div>
				<div className="mb-5">
					<div className="col-6">
						<span className="small text-muted">Don't have an account?</span>
						<Link to="/register">Sign Up</Link>
					</div>
					<div className="col-6 text-right">
						<button type="submit" className="btn">
							Sign In
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
