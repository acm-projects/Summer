import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bubbles from '../assets/Bubbles.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Gradient from '../assets/Gradient.png'

import styles from './styles/Library.module.css';

function Library() {
	return (
		<div className={styles.Library}>
			<header>
				<div className={styles.headtext}>
					<div className={styles.headImage}>
						<img src={Gradient} alt='Gradient'/>
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

			<div className={styles.nextBox}></div>

			<div className={styles.flexParentElement}>
				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>

					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Introduction to Arrays'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div>

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Introduction to Linked Lists'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div>

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='AVL Trees'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div >
			</div >

			<div className={styles.nextBox}></div>

			< div className={styles.flexParentElement} >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Data Structures'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder= 'Computer Architecture'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<input type='text' className={styles.videotitles}
								placeholder='Code in React'/>
					<input type='text' className={styles.videotitles}
								placeholder='Quiz | All Info'/>
				</div >
			</div >

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
