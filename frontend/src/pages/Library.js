import Bubbles from '../assets/Bubbles.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import GradientGraphic from '../assets/GradientGraphic.png'

import styles from './styles/Library.module.css';
import { useNavigate } from 'react-router-dom'


function Library() {

	const navigate = useNavigate();


	function handleQuiz(e) {
		e.preventDefault()
		navigate('/quizpage')
	}


	return (
		<div className={styles.Library}>
			<header>
				<div className={styles.headtext}>
					<div className={styles.headImage}>
						<img src={GradientGraphic} alt='Gradient'/>
					</div>
					<div className={styles.textOnImage}>
						<h3 style={{ fontSize: 50 }}>Library</h3>
						<div className={styles.libraryHeroSearch}>
							<input type='text' className={styles.libraryInput}
								placeholder='Search in Your Library'/>
							<button className={styles.librarysearchButton} type='button'>
								<span>SEARCH</span>
							</button>
							
						</div>
					</div>
				</div >
			</header >

			{/*<img src={BlueCircle} alt='bubbles' className={styles.blueCircleLeft} draggable="false" />*/}          


			<div className={styles.nextBox}></div>

			
			<div className={styles.vidDiv}>
			<div className={styles.vidDiv}>
			<div className={styles.flexParentElement}>
				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>

					</div>

					<input className={styles.videotitles}
								placeholder='Introduction to Arrays'/>


					<div className={styles.infoDiv}> 
					<div className={styles.parentElem}>
					<div className={styles.childElem}>
					<input className={styles.videotext} placeholder='Quiz' onClick ={handleQuiz} /> 


				</div>
						<input className={styles.videotext} placeholder='All Info' onClick ={handleQuiz} /> 

				</div>
					
					 </div>


			   <div className={styles.parentElem}>
				<div className={styles.childElem}>


				</div>
				</div>

					
					{/* Goes to the quiz page*/}
					<input className={styles.videotext} placeholder='Quiz | All Info' onClick ={handleQuiz} /> 

				</div>

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<div className={styles.videotitles}
						placeholder='Introduction to Linked Lists'/>

					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>


				<div className={styles.videotitles}>
				</div >

				</div >
				{/*<div className = {styles.video}intro to lol</div>*/}


				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='AVL Trees'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >
			</div >
			</div>
			</div>

			<div className={styles.nextBox}></div>


			<div className={styles.vidDiv}>
			<div className={styles.vidDiv}>
			< div className={styles.flexParentElement} >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Data Structures'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder= 'Computer Architecture'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Code in React'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >
				</div>
				</div>

			</div >
			<div className={styles.nextBox}></div>

		


			<div className={styles.vidDiv}>
			<div className={styles.vidDiv}>
				< div className={styles.flexParentElement} >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Data Structures'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder= 'Computer Architecture'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Code in React'/>
					<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info'/>
				</div >
			</div >
			</div >

              </div>



			 <div className={styles.nextBox}></div>
			<div className={styles.nextBox}></div>
			<div className={styles.nextBox}></div>


			<div className={styles.nextBox}></div>
			<div className={styles.nextBox}>
			
				<img src={BlueCircle} alt='blue circle' className={styles.blueCircle} />

				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>
				{/*<img src={PinkCircle} alt='pink circle' className={styles.pinkCircle} /> */}
				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>


			</div>
		</div>
	)
}

export default Library;