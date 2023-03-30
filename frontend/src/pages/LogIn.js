import React, { Component } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios, { isCancel, AxiosError } from 'axios';
import { IoIosArrowBack } from 'react-icons/io'

import logo from '../assets/SummerLogo.png';
import circles from '../assets/BluePinkCircles.png';

import './styles/LogIn.css'

const LogIn = () => {
	const navigate = useNavigate();

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			// Send a POST request
			axios
				.post(
					"http://localhost:5000/api/users",
					{
						name: name,
						email: email,
						password: password,
					},
					{
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
					}
				)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error.message);
				});
		};

	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {name} is successfully registered!</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please fill out every field.</h1>
			</div>
		);
	};

	function handleBack(e) {
		e.preventDefault();
		navigate('/')
	}

	return (
		<div>
			<div className="screen-container">
				<div className="form-container">
					<div className="back-btn" onClick={handleBack}>
						<IoIosArrowBack /> Back
					</div>

					<div className="form">
						<div className="subtitle" onClick={handleBack}>
							<img src={logo} alt='logo' />
							<p>Summer</p>
						</div>

						<div className='cover'>
							<p>Login</p>

							<form>
								<label className="loginLabel">Name</label>
								<input
									onChange={handleName}
									className='log-input'
									value={name}
									type="text" />
								<label className="loginLabel">Email</label>
								<input
									onChange={handleEmail}
									className="log-input"
									value={email}
									type="email" />
								<label className="loginLabel">Password</label>
								<input
									onChange={handlePassword}
									className="log-input"
									value={password}
									type="password" />
								<button onClick={handleSubmit} className="btn" type="submit">
									<span>LOG IN</span>
								</button>

							</form>

							<div className='signup-prompt'>
								<div>Don't have an account?</div>
								<Link to='/signup' className='signup-text'>Sign Up</Link>
							</div>

							{/* Calling to the methods */}
							<div className="messages">
								{errorMessage()}
								{successMessage()}
							</div>
						</div>
					</div>

					<img src={circles} className='bleeding-circles' draggable="false"/>
				</div>
			</div>

		</div>
	);
}

export default LogIn