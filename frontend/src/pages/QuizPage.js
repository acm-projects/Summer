import Line from "../components/Line";
import CheckCircle from '../assets/CheckCircle.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Bubbles from '../assets/Bubbles.png'
import { useNavigate } from 'react-router-dom'
import axios, { isCancel, AxiosError } from 'axios';
import styles from './styles/QuizPage.module.css';
import React, { useState, useContext, useEffect } from "react";

import { MyContext } from '../App'

function QuizPage() {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [question1, setQuestion1] = useState('');

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const [question2, setQuestion2] = useState('');

    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');

    const {summary, setSummary} = useContext(MyContext)
    const {quiz, setQuiz } = useState([])

    const handleClick = () => {
     setActive(!active);
  };

  // i want to make it so instead of going back to general, I can reveal the answers
  function handleSubmit(e) {
    e.preventDefault()
    navigate('/general')
}

const quizlink = async () => {
    let result = ''
	await axios.post("http://localhost:5000/api/quiz",
	{
		summary: 'This page shares a full list of book summaries I have compiled during my reading and research. I have tried to summarize each book on this page in just three sentences, which I think is a fun way to distill the main ideas of the book. If a particular book sounds interesting to you, click on the full book summary and you can browse all of my notes on it.'
		// Takes the summary of a wrong video idk why, probably one thats hardcoded
        // summary: summary 
	}
	).then((response) => {
            result = response.data.quiz
            // console.log(summary);
            // console.log("printed summary")
            // console.log(response.data.text)

            setQuestion1(result[0].Question)
            setQuestion2(result[1].Question)

            setAnswer1(result[0].Choices.A)
            setAnswer2(result[0].Choices.B)
            setAnswer3(result[0].Choices.C)
            setAnswer4(result[0].Choices.D)

            setAnswer5(result[1].Choices.A)
            setAnswer6(result[1].Choices.B)
            setAnswer7(result[1].Choices.C)
            setAnswer8(result[1].Choices.D)
            // console.log(result[0].Question)
            // setQuestion1(result)
        }).catch((err) => {
            console.log(err)
        }) 

        console.log(result)
	}	

    useEffect(() => {
		quizlink()
	}, [])

	return (

		<div className={styles.QuizPage}>

			<img src={Bubbles} alt='bubbles' className={styles.quizbubbleRight} />

			<div className={styles.nextBox}></div>
			<span className={styles.fontLink}>
				<div className={styles.horizBox}></div>
				<h1 style={{ fontSize: 50 }}>Quiz and Guide</h1>
			</span>

			<img src={CheckCircle} alt='check circle' className={styles.check} />

			<h5 style={{ fontSize: 20 }}> Get started quickly: Engage below and assess your knowledge of the desired video </h5>
			<div className={styles.nextBox}></div>

			<Line />
			
			<h6 style={{ fontSize: 18 }}> Choose one answer choice. </h6>

		

			<div className={styles.quizflexParentElement}>
                    <div className={styles.quizflexChildElement}>
                        <div className={styles.test}>

                        <div className= {styles.questionTitle}> 
                            <p>Question 1</p>
                            </div>

                            <div className= {styles.questionText}>
                            <p>{question1}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.quizflexChildElement}>
                        
                            <div className={styles.push}></div>

                            {/*<button className={styles.onClick} type='button' onClick={handleClick} style={{ backgroundColor: active ? "gray" : "white" }}> Arrays </button>*/}

						<div className={styles.quizflexSmallerElement}></div>

                        <div className={styles.smallBox}></div>
                        {/*<div className={styles.testAnswers} onClick={handleClick} style={{ backgroundColor: active ? "gray" : "white" }}>
                            <p>Array</p>
                        </div>*/}
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>

                        <div className={styles.testAnswers}>
                            <p>{answer1}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>

                        <div className={styles.testAnswers}>
                            <p>{answer2}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>
                        <div className={styles.testAnswers}>
                            <p>{answer3}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>

                        <div className={styles.testAnswers}>
                            <p>{answer4}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>

                    </div>
                </div>

                <div className={styles.nextBox}></div>



			<div className={styles.quizflexParentElement}>
                    <div className={styles.quizflexChildElement}>
                        <div className={styles.test}>
                        <div className= {styles.questionTitle}> 
                            <p>Question 2</p>
                            </div>
                            <div className= {styles.questionText}>
                            <p>{question2}</p>
                            </div>
                        </div>
						
                    </div>
                    <div className={styles.quizflexChildElement}>
                        <div className={styles.testAnswers}>
                            <div className={styles.push}></div>
                            <p>{answer5}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>
                        <div className={styles.testAnswers}>
                            <p>{answer6}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>

                        <div className={styles.smallBox}></div>

                        <div className={styles.testAnswers}>
                            <p>{answer7}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>

                        <div className={styles.smallBox}></div>
                        <div className={styles.testAnswers}>
                            <p>{answer8}</p>
                        </div>
						<div className={styles.quizflexSmallerElement}></div>
                        <div className={styles.smallBox}></div>
                    </div>
                </div>


				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>
				<div className={styles.flexParentElement}>
					<div className={styles.flexChildElement}>
						
{/* On clicking submit, I want to execute a function that sets the state of the answers to then display it */}
                    <button className={styles.submit} type='button' onClick={handleSubmit} style={{ fontSize: 22 }} > Submit! </button>

					</div>

				<img src={PinkCircle} alt='pink cicrle' className={styles.pinkCircle} />

				<div className={styles.nextBox}></div>
			</div>
		</div >
	)
}
export default QuizPage;
