import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios, { isCancel, AxiosError } from 'axios';
import { IoIosArrowBack } from 'react-icons/io'

import logo from '../assets/SummerLogo.png';
import circles from '../assets/BluePinkCircles.png'

import styles from './styles/LogIn.module.css'
import FormInput from "../components/FormInput";

const SignUp = () => {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	})

	const inputs = [ // props for each form input box
		{
			id: 1,
			name: "username",
			type: "text",
			errorMessage: "Name should be between 3-16 characters and not include special characters.",
			label: "Name",
			required: true,
			pattern: '^[A-Za-z0-9]{3,16}$'
		},
		{
			id: 2,
			name: "email",
			type: "text",
			errorMessage: "It should be a valid email address.",
			label: "Email",
			required: true,
		},
		{
			id: 3,
			name: "password",
			type: "password",
			errorMessage: "	Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
			label: "Password",
			required: true,
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			errorMessage: "Passwords do not match.",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	]

	// const [submitted, setSubmitted] = useState(false);
	// const [error, setError] = useState(false);

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				"http://localhost:5000/api/users",
				{
					name: values.name,
					email: values.email,
					password: values.password,
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


	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	function handleBack(e) {
		e.preventDefault();
		navigate('/login')
	}

	function handleHome(e) {
		e.preventDefault();
		navigate('/')
	}

	// disable scrolling
	const disableScroll = () => {
		document.body.style.overflow = 'hidden';
	}

	const enableScroll = () => {
		document.body.style.overflow = 'auto';
	}

	useEffect(() => {
		disableScroll();

		return () => {
			enableScroll();
		}
	}, []);

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
							{inputs.map((input) => (
								<FormInput key={input.id} {...input} value={values[input.name]}
									onChange={onChange} />
							))}
							<button onClick={handleSubmit} className={styles.btn} type="submit">
								<span>SIGN UP</span>
							</button>
						</form>

						<div className={styles.signupPrompt}>
							<div>Already have an account?</div>
							<Link to='/login' className={styles.signupText}>Log In</Link>
						</div>

					</div>
				</div>

				<img src={circles} alt='backgroundCircles' className={styles.bleedingCircles} draggable="false" />
			</div>
		</div>
	);
}

export default SignUp