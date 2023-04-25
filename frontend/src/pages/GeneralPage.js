import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react'
import { MyContext } from '../App'
import axios from 'axios';
import Bubbles from '../assets/Bubbles.png'
import RingLoader from 'react-spinners/RingLoader';
import styles from './styles/General.module.css'

const GeneralPage = () => {
	const navigate = useNavigate();
    const { link } = useContext(MyContext)
    const { summary, setSummary } = useContext(MyContext)
	const { loading, setLoading } = useContext(MyContext)

	const linkString = link.toString();
	// const startIndex = linkString.indexOf('v=') + 2; // Find the index of the 'v=' substring
	// const endIndex = linkString.indexOf('&', startIndex); // Find the index of the '&' character after the video ID
	const videoId = linkString.substring(17); // Extract the video ID using the start and end indices
	console.log(videoId)

	function handleSummary(e) {
		e.preventDefault()
		navigate('/summary')
	}

	function handleQuiz(e) {
		e.preventDefault()
		navigate('/quizpage')
	}

	
    useEffect(() => {
		links()
	}, [])

    const links = async () => {
        let result = ''
		await axios.post("http://localhost:5000/api/videos",
		{
			URL: link
		},
		
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
		
		
		).then((response) => {
            result = response.data.text
            // console.log(response.data.text)
        })
        .catch((err) => {
            console.log(err);
        })

        // setLoading(true)
        // console.log(result)
        // console.log(summary)
		await setSummary(result)
        setLoading(false)
	}

	return (
		<div className={styles.pageContainer}>
			<div className={styles.videoSection}>
				<img src={Bubbles} alt='bubbles' className={styles.bubbleLeft} draggable="false" />
				<img src={Bubbles} alt='bubbles' className={styles.bubbleRight} draggable="false" />

				<p>Video Title</p>

				{/* <div className={styles.video}>
					video
				</div> */}
				<div className={styles.video}>
					<iframe
						width="853"
						height="450"
						// src={link}
						src={`https://www.youtube.com/embed/${videoId}`}
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
							{/* {loading ? <RingLoader color={'#000000'} size={50}/> : (summary)} */}
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