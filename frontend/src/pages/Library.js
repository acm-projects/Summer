import Bubbles from '../assets/Bubbles.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import GradientGraphic from '../assets/GradientGraphic.png'
import { useState, useContext, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios';
import styles from './styles/Library.module.css';
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'



function Library() {
	const navigate = useNavigate();
	const [videos, Setvideos] = useState([]);
	const [titles, Settitles] = useState([]);


	function handleQuiz(e) {
		e.preventDefault()
		navigate('/quizpage')
	}
	

	function handleGeneral(e) {
		e.preventDefault()
		navigate('/general')
	}

	useEffect(() => {
		RetrieveVideo()
	}, [])

	async function RetrieveVideo(){
		let videoArray = await axios.get("http://localhost:5000/api/videos/url")
		//console.log(videoArray.data)
		Setvideos(videoArray.data);
		//RetrieveTitles(videos);
		

	}

	// async function RetrieveTitles(videosarray){
	// 	for(let i=0; i<videos.length; i++){

	// 		const videoUrl = videosarray[i]
	// 		const apiKey = process.env.Youtube_API_KEY

	// 		// Make an API request to get video data
	// 		fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoUrl}&key=${apiKey}&part=snippet`)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			const videoTitle = data.items[0].snippet.title;
	// 			console.log(videoTitle); // Outputs the video title to the console
	// 		})
	// 		.catch(error => console.error(error));


	// 	}
	// }	
	return (
		<div className={styles.Library}>
			<header>
				<div className={styles.headtext}>
					<div className={styles.headImage}>
						<img src={GradientGraphic} alt='Gradient' />
					</div>
					<div className={styles.textOnImage}>
						<h3 style={{ fontSize: 50 }}>Library</h3>
						<div className={styles.libraryHeroSearch}>
							<input type='text' className={styles.libraryInput}
								placeholder='Search in Your Library' />
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
							
							<ReactPlayer 
							//className= {styles.reactplayer}                                          
							url= {videos[0]}
							light = {true}
							width = '100%'
							height = '100%'
							playing = {false}
							/>
							</div>

							<input className={styles.videotitles}
								placeholder='"Learn PYTHON in 5 Minutes"' />


							<div className={styles.infoDiv}>
								<div className={styles.parentElem}>
									<div className={styles.childElem}>
										<input className={styles.videotext} placeholder='Quiz' onClick={handleQuiz} />

									</div>
									<input className={styles.videotext} placeholder='All Info' onClick={handleGeneral} />

								</div>

							</div>
							{/* Goes to the quiz page*/}

						</div>

						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
							<ReactPlayer 
							//className= {styles.reactplayer}                                          
							url= {videos[1]}
							light = {true}
							width = '100%'
							height = '100%'
							/>


							</div>
							<input type='text' className={styles.videotitles}
							placeholder='Learn Graphs in 5 minutes' />
								
								
								

							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />


							<div className={styles.videotitles}>
							</div >

						</div >
						{/*<div className = {styles.video}intro to lol</div>*/}


						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
							<ReactPlayer 
							//className= {styles.reactplayer}                                          
							url= {videos[2]}
							playing
							light = {true}
							width = '100%'
							height = '100%'
							/>

							</div>
							<input type='text' className={styles.videotitles}
								placeholder='Learn Big O notation in 6 minutes' />
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
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
							<ReactPlayer 
							//className= {styles.reactplayer}                                          
							url= {videos[3]}
							playing
							light = {true}
							width = '100%'
							height = '100%'
							/>

							</div>
							<input type='text' className={styles.videotitles}
								placeholder="TypeScript - The Basics"/>
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
						</div >
						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
								<ReactPlayer 
								//className= {styles.reactplayer}                                          
								url= {videos[4]}
								playing
								light = {true}
								width = '100%'
								height = '100%'
								/>
							</div>
							<input type='text' className={styles.videotitles}
								placeholder='How to OVER Engineer a Website // What is a Tech Stack?'
								/>
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
						</div >
						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
								<ReactPlayer 
							//className= {styles.reactplayer}                                          
								url= {videos[5]}
								playing
								light = {true}
								width = '100%'
								height = '100%'
								/>
							</div>
							<input type='text' className={styles.videotitles}
								placeholder='7 Database Paradigms' />
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
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
								placeholder='Data Structures' />
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
						</div >

						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
							</div>
							<input type='text' className={styles.videotitles}
								placeholder='Computer Architecture' />
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
						</div >

						<div className={styles.flexChildElement}>
							<div className={styles.libraryVid}>
							</div>
							<input type='text' className={styles.videotitles}
								placeholder='Code in React' />
							<input type='text' className={styles.videotext}
								placeholder='Quiz | All Info' />
						</div >
					</div >
				</div >
			</div>

			{/* <div className={styles.nextBox}></div>
			<div className={styles.nextBox}></div>
			<div className={styles.nextBox}></div>
			<div className={styles.nextBox}></div> */}
			<div className={styles.nextBox}>
				{/* <img src={BlueCircle} alt='blue circle' className={styles.blueCircle} /> */}

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

