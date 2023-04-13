import styles from './styles/Hero.module.css'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { MyContext } from '../App.js'
import HeroGradient from './HeroGradient';

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

	return (
		<div>
			<div className={styles.gradient}>

			</div>
			<div className={styles.container}>
				{/* <HeroGradient className={styles.gradient}/> */}
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
