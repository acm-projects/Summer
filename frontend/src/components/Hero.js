import styles from './styles/Hero.module.css'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../App.js'

const Hero = () => {
	const { link, setLink } = useContext(MyContext)
	const [error, setError] = useState()
	const navigate = useNavigate();

	function handleSummarize(e) {
		if (!error) {
			e.preventDefault()
			navigate('/general')
		}
		console.log(link)
	}

	const handleChange = (e) => {
		e.preventDefault();

		const value = e.target.value;
		const regex = new RegExp(/^https:\/\/youtu\.be\/[a-zA-Z0-9_-]{11}$/);
		if (regex.test(value)) {
			setLink(value);
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={`${styles.textGradient} ${styles.title1}`}>Watch Less,</div>
					<div className={styles.title2}>Know More.</div>
					<div className={styles.heroSubtext}>Save time, focus on learning, and enhance your video experience with Summer, an application that provides supplementary material and assistance!</div>
				</div>

				<div className={styles.heroSearchContainer}>
					<div className={styles.heroSearch}>
						<input type='text' className={styles.input} pattern='/^https:\/\/youtu\.be\/[a-zA-Z0-9_-]{11}$/'
							placeholder='Enter YouTube Link' onChange={handleChange}/>
						<button className={styles.searchButton} type='button' onClick={handleSummarize}>
							<span>SUMMARIZE</span>
						</button>
					</div>
					{error && <span className={styles.span}>Link must be of form "https://youtu.be/video_id	"</span>}
				</div>
			</div>
		</div>
	)
}

export default Hero
