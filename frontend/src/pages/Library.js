import Hero from "../components/Hero";
import Line from "../components/Line";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bubbles from '../assets/Bubbles.png'
import CheckCircle from '../assets/CheckCircle.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import Gradient from '../assets/Gradient.png'
import LineCircle from '../assets/LineCircle.png'

import styles from './styles/Library.module.css';

function Library() {
	return (
		<div className={styles.Library}>
			<header>
				<div className={styles.headtext}>
					<div className={styles.headImage}>
						<img src={Gradient} />
					</div>
					<div className={styles.textOnImage}>
						<h3 style={{ fontSize: 50 }}>Library</h3>
						<div className={styles.libraryHeroSearch}>
							<input type='text' className={styles.libraryInput}
								placeholder='Search in Your Library'/>
							<button className={styles.searchButton} type='button'>
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
					<p> Introduction to Arrays</p>
					<p> Quiz | All Info</p>
				</div>

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<p> Introduction to Linked Lists</p>
					<p> Quiz | All Info</p>
				</div>

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<p> AVL Trees </p>
					<p> Quiz | All Info</p>
				</div >
			</div >

			<div className={styles.nextBox}></div>
			< div className={styles.flexParentElement} >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<p> Data Structures</p>
					<p> Quiz | All Info</p>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<p> Intro to Computer Architecture</p>
					<p> Quiz | All Info</p>
				</div >

				<div className={styles.flexChildElement}>
					<div className={styles.libraryVid}>
					</div>
					<p> Code in React </p>
					<p> Quiz | All Info</p>
				</div >
			</div >

			<div className={styles.nextBox}></div>
			<div className={styles.nextBox}>
				<img src={BlueCircle} className={styles.blueCircle} />

				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>
				<img src={PinkCircle} className={styles.pinkCircle} />
				<div className={styles.nextBox}></div>
				<div className={styles.nextBox}></div>

			</div>
		</div>
	)
}

export default Library;
