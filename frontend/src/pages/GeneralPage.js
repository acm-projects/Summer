import { useNavigate } from "react-router-dom"

const GeneralPage = () => {
	const navigate = useNavigate();

	function handleSummary(e) {
		e.preventDefault()
		navigate('/summary')
	}

	function handleQuiz(e) {
		e.preventDefault()
		navigate('/quizpage')
	}

	return (
			<div>
				<div>
				<p>Video Title</p>

				{/* <div className={styles.video}>
					video
				</div> */}
				<div className={styles.video}>
					<iframe
						width="853"
						height="450"
						src={link}
						// src={'https://youtu.be/yY2xDJ_6j_c'}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				</div>
			</div>

			<div className={styles.featureSection}>
				{/* <img src={UpButton} alt='up button' className={styles.upButton}/> */}
				<div className={styles.featureContainer}>
					<div className={styles.summary} onClick={handleSummary}>
						<div className={styles.subtitle}>Summary</div>
						<div className={styles.summaryText}>
							{summary}
						</div>
						<div className={`${styles.viewVidBtn} ${styles.summaryBtn}`}>VIEW SUMMARY</div>
					</div>
					<div className={styles.quiz}>
						<div className={`${styles.viewVidBtn} ${styles.quizBtn}`} onClick={handleQuiz}>
							TAKE QUIZ
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GeneralPage