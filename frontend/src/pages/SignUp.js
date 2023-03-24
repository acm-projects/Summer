import React, { Component } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios, { isCancel, AxiosError } from 'axios';
import { IoIosArrowBack } from 'react-icons/io'

import logo from '../assets/SummerLogo.png';
import BlueCircle from '../assets/BlueCircle.png'
import PinkCircle from '../assets/PinkCircle.png'

import './styles/LogIn.css'

const SignUp = () => {
	const navigate = useNavigate();

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('')

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

	const handleConfirmPass = (e) => {
		if (e.target.value != password) {
			setError(true)
		}
		setConfirmPass(e.target.value);
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

			// const data = await response.json
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
				<h1>Please fill out every field or check if passwords match.</h1>
			</div>
		);
	};

	function handleBack(e) {
		e.preventDefault();
		navigate('/login')
	}


	return (
		<div className="page-container">
			<div className="form-container">
				<div className="back-btn" onClick={handleBack}>
					<IoIosArrowBack /> Back
				</div>
				<div className="form">
					<div className="subtitle">
						<img src={logo} alt='logo' />
						<p>Summer</p>
					</div>

					{/* <img src={BlueCircle} alt='blue' className='blue-circle'/>
				<img src={PinkCircle} alt='pink' className='pink-circle'/> */}

					<div className='cover'>
						<p>Sign Up</p>

						<form>
							{/* Labels and inputs for form data */}
							<input
								onChange={handleName}
								className='log-input'
								value={name}
								type="text"
								placeholder='Name' />
							<input
								onChange={handleEmail}
								className="log-input"
								value={email}
								type="email"
								placeholder='Email' />
							<input
								onChange={handlePassword}
								className="log-input"
								value={password}
								type="password"
								placeholder='Password' />
							<input
								onChange={handleConfirmPass}
								className="log-input"
								value={confirmPass}
								type="confirmPass"
								placeholder='Confirm Password' />

							<button onClick={handleSubmit} className="btn" type="submit">
								<span>SIGN UP</span>
							</button>

							<div className='horizontal-line'></div>
						</form>

						<div className='signup-prompt'>
							<div>Already have an account?</div>
							<Link to='/login' className='signup-text'>Log In</Link>
						</div>

						{/* Calling to the methods */}
						<div className="messages">
							{errorMessage()}
							{successMessage()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp