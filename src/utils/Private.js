
import { connect } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	return (localStorage.getItem("token")) ? children : <Navigate to='/' />;
};

const mapStateToProps = state => {
	return {
		...state,
		// isLoggedIn: state.isLoggedIn,
	};
};

export default connect(mapStateToProps)(PrivateRoute);
