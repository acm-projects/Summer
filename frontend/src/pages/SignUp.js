import React, { Component } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios, { isCancel, AxiosError } from 'axios';
import { IoIosArrowBack } from 'react-icons/io'

import logo from '../assets/SummerLogo.png';
import circles from '../assets/BluePinkCircles.png'

import styles from './styles/LogIn.module.css'

const SignUp = () => {
	const navigate = useNavigate();

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('')

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

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
		if (name === '' || email === ''
			|| password === '' || password !== confirmPass) {
			setError(true);
			return;
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
				<h1>Please fill out every field and ensure both passwords match.</h1>
			</div>
		);
	};

	function handleBack(e) {
		e.preventDefault();
		navigate('/login')
	}

	function handleHome(e) {
		e.preventDefault();
		navigate('/')
	}

	return (
		<div className={styles.screenContainer}>
			<div className={styles.formContainer}>
				<div className={styles.backBtn} onClick={handleBack}>
					<IoIosArrowBack /> Back
				</div>
				<div className={styles.form}>
					<div className={styles.subtitle} onClick={handleHome}>
						<img src={logo} alt='SummerLogo' />
						<p>Summer</p>
					</div>

					<div className={styles.cover}>
						<p>Sign Up</p>

						<form>
							{/* Labels and inputs for form data */}
							<label className={styles.loginLabel}>Name</label>
							<input
								onChange={handleName}
								className={styles.logInput}
								value={name}
								type="text"/>
							<label className={styles.loginLabel}>Email</label>
							<input
								onChange={handleEmail}
								className={styles.logInput}
								value={email}
								type="email"/>
							<label className={styles.loginLabel}>Password</label>
							<input
								onChange={handlePassword}
								className={styles.logInput}
								value={password}
								type="password"/>
							<label className={styles.loginLabel}>Confirm Password</label>
							<input
								onChange={handleConfirmPass}
								className={styles.logInput}
								value={confirmPass}
								type="password"/>

							<button onClick={handleSubmit} className={styles.btn} type="submit">
								<span>SIGN UP</span>
							</button>
						</form>

						<div className={styles.signupPrompt}>
							<div>Already have an account?</div>
							<Link to='/login' className={styles.signupText}>Log In</Link>
						</div>

						{/* Calling to the methods */}
						<div className={styles.messages}>
							{errorMessage()}
							{successMessage()}
						</div>
					</div>
				</div>

				<img src={circles} className={styles.bleedingCircles} draggable="false"/>
			</div>
		</div>
	);
}

export default SignUp