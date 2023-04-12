import styles from './styles/Hero.module.css'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { MyContext } from '../App.js'

const Hero = () => {
	// const [link, setlink] = useState([]);
	const { link, setLink } = useContext(MyContext)
	const navigate = useNavigate();

	function handleSummarize(e) {
		e.preventDefault()
		navigate('/general')
	}

	function handleChange(e) {
		e.preventDefault();
		setLink(e.target.value)
	}

	// Gradient-related code
	// var c = document.getElementById('canv');
	// var $ = c.getContext('2d');

	// var x, y, r, g, b;

	// var col = function (x, y, r, g, b) {
	// 	$.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	// 	$.fillRect(x, y, 1, 1);
	// }
	// var R = function (x, y, t) {
	// 	return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
	// }

	// var G = function (x, y, t) {
	// 	return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
	// }

	// var B = function (x, y, t) {
	// 	return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
	// }

	// var t = 0;

	// var run = function () {
	// 	for (x = 0; x <= 35; x++) {
	// 		for (y = 0; y <= 35; y++) {
	// 			col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
	// 		}
	// 	}
	// 	t = t + 0.01;
	// 	// window.requestAnimationFrame(run);
	// }

	return (
		<div>
			<div className={styles.gradient}>

			</div>
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={`${styles.textGradient} ${styles.title1}`}>Watch Less,</div>
					<div className={styles.title2}>Know More.</div>
					<div className={styles.heroSubtext}>Save time, focus on learning, and enhance your video experience with Summer, an application that provides supplementary material and assistance!</div>
				</div>

				<div className={styles.heroSearch}>
					<input type='text' className={styles.input} placeholder='Enter YouTube Link' onChange={handleChange} />
					<button className={styles.searchButton} type='button' onClick={handleSummarize}>
						<span>SUMMARIZE</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
