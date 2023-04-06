import Line from "../components/Line";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CheckCircle from '../assets/CheckCircle.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Bubbles from '../assets/Bubbles.png'


import styles from './styles/QuizPage.module.css';

function QuizPage() {
	return (
		<div className={styles.QuizPage}>
			<img src={Bubbles} alt='bubbles' className={styles.bubbleRight} />

			<div className={styles.nextBox}></div>
			<span className={styles.fontLink}>
				<div className={styles.horizBox}></div>
				<h1 style={{ fontSize: 50 }}>Quiz and Guide</h1>
			</span>

			<img src={CheckCircle} alt='check circle' className={styles.check} />

			<h5 style={{ fontSize: 15 }}> Join many others: Summer is trusted by many ambitious users </h5>
			<h5 style={{ fontSize: 15 }}> Get started quickly: Engage below and assess your knowledge of the desired video </h5>
			<div className={styles.nextBox}></div>

			<Line />

			<h6 style={{ fontSize: 15 }}> Choose one answer choice. </h6>

			<div className={styles.flexParentElement}>
				<div className={styles.flexChildElement}>
					<img src={BlueCircle} alt='blue circle' className={styles.blueCircle} />

					<div className={styles.test}>
						<h2>Question 1</h2>
						<p>Which of these is a data structure?</p>
					</div>
				</div>

				<div className={styles.flexParentElement}>
					<div className={styles.testAnswers}>
						<p>Search</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>Insert</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>Array</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>Java</p>
					</div>
					<div className={styles.smallBox}></div>

				</div>

			</div>

			<div className={styles.flexParentElement}>
				<div className={styles.flexChildElement}>
					<div className={styles.test}>
						<h2>Question 2</h2>
						<p>Which of these is an IDE?</p>
					</div>

				</div>
				<div className={styles.flexChildElement}>
					<div className={styles.testAnswers}>
						<div className={styles.push}></div>
						<p>Eclipse</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>IntelliJ</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>Visual Studio</p>
					</div>
					<div className={styles.smallBox}></div>

					<div className={styles.testAnswers}>
						<p>All of the above</p>
					</div>
					<div className={styles.smallBox}></div>
				</div >

				<div className={styles.flexParentElement}>
					<div className={styles.flexChildElement}>
						<div className={styles.test}>
							<h2>Question 3</h2>
							<p>Which of these is a programming language?</p>
						</div>
					</div>
					<div className={styles.flexChildElement}>
						<div className={styles.testAnswers}>
							<div className={styles.push}></div>
							<p>MongoDB</p>
						</div>
						<div className={styles.smallBox}></div>
						<div className={styles.testAnswers}>
							<p>Eclipse</p>
						</div>
						<div className={styles.smallBox}></div>

						<div className={styles.testAnswers}>
							<p>React</p>
						</div>
						<div className={styles.smallBox}></div>
						<div className={styles.testAnswers}>
							<p>IntelliJ</p>
						</div>
						<div className={styles.smallBox}></div>
					</div>
				</div>

				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>

				<div className={styles.flexParentElement}>
					<div className={styles.flexChildElement}>
						<div className={styles.submit}>
							<h2>Submit!</h2>
						</div>
					</div>
				</div>

				<img src={PinkCircle} alt='pink cicrle' className={styles.pinkCircle} />

				<div className={styles.nextBox}></div>
			</div>
		</div >
	)
}
export default QuizPage;
