import Line from "../components/Line";
import Bubbles from '../assets/Bubbles.png'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import styles from './styles/QuizPage.module.css';

import React, { useState } from "react";


function QuizPage() {
    const navigate = useNavigate();


    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    function handleSubmit(e) {
        e.preventDefault()
        navigate('/general')
    }

    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
    }

    return (

        <div className={styles.QuizPage}>

            <img src={Bubbles} alt='bubbles' className={styles.quizbubbleRight} />

            <div className={styles.nextBox}></div>
            <span className={styles.fontLink}>
                <div className={styles.horizBox}></div>
                <h1 style={{ fontSize: 50 }}>Quiz and Guide</h1>
            </span>

            {/*<img src={CheckCircle} alt='check circle' className={styles.check} > */}

            <h5 style={{ fontSize: 20 }}> Get started quickly: Engage below and assess your knowledge of the desired video. </h5>
            
            <div className={styles.backBtn} onClick={handleBack}>
                <IoIosArrowBack /> Back
            </div>
            
            <div className={styles.nextBox}></div>

            <Line />

            <h6 style={{ fontSize: 18 }}> Choose one answer choice. </h6>



            <div className={styles.quizflexParentElement}>
                <div className={styles.quizflexChildElement}>
                    <div className={styles.test}>

                        <div className={styles.questionTitle}>
                            <p>Question 1</p>
                        </div>

                        <div className={styles.questionText}>
                            <p>Which of these is not a data structure?</p>
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
                        <p>Binary Search</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>

                    <div className={styles.testAnswers}>
                        <p>Hash Maps</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>
                    <div className={styles.testAnswers}>
                        <p>Linked List</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>

                    <div className={styles.testAnswers}>
                        <p>Array</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>

                </div>
            </div>

            <div className={styles.nextBox}></div>





            <div className={styles.quizflexParentElement}>
                <div className={styles.quizflexChildElement}>
                    <div className={styles.test}>
                        <div className={styles.questionTitle}>
                            <p>Question 2</p>
                        </div>
                        <div className={styles.questionText}> Which of these is a programming language?
                        </div>
                    </div>

                </div>
                <div className={styles.quizflexChildElement}>
                    <div className={styles.testAnswers}>
                        <div className={styles.push}></div>
                        <p>Python</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>
                    <div className={styles.testAnswers}>
                        <p>Eclipse</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>

                    <div className={styles.smallBox}></div>

                    <div className={styles.testAnswers}>
                        <p>React</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>

                    <div className={styles.smallBox}></div>
                    <div className={styles.testAnswers}>
                        <p>IntelliJ</p>
                    </div>
                    <div className={styles.quizflexSmallerElement}></div>
                    <div className={styles.smallBox}></div>
                </div>
            </div>


            <div className={styles.nextBox}></div>
            <div className={styles.nextBox}></div>

            <div className={styles.flexParentElement}>
                <div className={styles.flexChildElement}>

                    <button className={styles.submit} type='button' onClick={handleSubmit} style={{ fontSize: 22 }} > Submit! </button>

                </div>

                {/* <img src={PinkCircle} alt='pink cicrle' className={styles.pinkCircle} /> */}
                <div className={styles.nextBox}></div>
            </div>
        </div >
    )
}
export default QuizPage;
