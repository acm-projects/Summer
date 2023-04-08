import { useNavigate } from "react-router-dom"

import Bubbles from '../assets/Bubbles.png'
import UpButton from '../assets/UpButton.png'
import styles from './styles/General.module.css'

const GeneralPage = () => {
	const navigate = useNavigate();

	function handleSummary(e) {
		e.preventDefault()
		navigate('/summary')
	}

	return (
		<div className={styles.pageContainer}>
			<div className={styles.videoSection}>
				<img src={Bubbles} alt='bubbles' className={styles.bubbleLeft} draggable="false" />
				<img src={Bubbles} alt='bubbles' className={styles.bubbleRight} draggable="false" />

				<p>Video Title</p>

				<div className={styles.video}>
					video
				</div>
				{/* <div className={styles.video}>
					<iframe
						width="853"
						height="450"
						src={`https://www.youtube.com/embed/${link}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				</div> */}

				<div className={styles.descriptionSection}>
					<div className={styles.viewVidBtn} onClick=''>
						VIEW IN YOUTUBE
					</div>
				</div>
			</div>

			<div className={styles.featureSection}>
				{/* <img src={UpButton} alt='up button' className={styles.upButton}/> */}
				<div className={styles.featureContainer}>
					<div className={styles.summary} onClick={handleSummary}>
						<div className={styles.subtitle}>Summary</div>
						<div className={styles.summaryText}>

						</div>
						<div className={`${styles.viewVidBtn} ${styles.summaryBtn}`}>VIEW SUMMARY</div>
					</div>
					<div className={styles.quiz}>
						<div className={`${styles.viewVidBtn} ${styles.quizBtn}`}>
							TAKE QUIZ
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}

export default GeneralPage