import Hero from "../components/Hero";
import Line from "../components/Line";
import YouTubeGraphic from '../assets/YouTubeGraphic.png'
import Bubbles from '../assets/Bubbles.png'
import PinkCircle from '../assets/PinkCircle.png'
import LibraryGraphic from '../assets/LibraryGraphic.png'
import CheckCircle from '../assets/CheckCircle.png'
import LineCircle from '../assets/LineCircle.png'

import styles from './styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Hero />
            <div className={styles.linePadding}>
                <Line />
            </div>

            {/* Feature section */}
            <div className={styles.featureSection}>
                <img src={YouTubeGraphic} alt='graphic' draggable="false" />

                <div className={styles.featureText}>
                    <div className={styles.summary}>
                        <div className={styles.featureTitle}>
                            <img src={LineCircle} alt='linecircle' draggable="false" />
                            <h1 className={styles.featureHeader}>Summary</h1>
                        </div>
                        <div className={styles.featureSubtext}>
                            <p>Learn faster and create an outlined summary for your desired videos, all in a few clicks.</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.featureTitle}>
                            <img src={CheckCircle} alt='check' draggable="false" />
                            <h1 className={styles.featureHeader}>Quiz Generation</h1>
                        </div>
                        <div className={styles.featureSubtext}>
                            <p>Generate quizzes of all types on the fly for more informational videos you especially want to remember.</p>
                        </div>
                    </div>
                </div>

                <img src={Bubbles} alt='bubbles' className={styles.mixedBubbleRight} draggable="false" />
                <img src={Bubbles} alt='bubbles' className={styles.mixedBubbleLeft} draggable="false" />
            </div>

            <div className={styles.librarySection}>
                <img src={PinkCircle} alt='bubbles' className={styles.pinkCircleLeft} draggable="false" />               
                <img src={PinkCircle} alt='bubbles' className={styles.pinkCircleRight} draggable="false" />

                <p className={styles.libraryTitle}>Library Access</p>
                <div className={styles.libraryText}>With a Summer account, you can refer to previously-processed materials in our stored library. You can also download your summaries for any other purposes.</div>
                <img src={LibraryGraphic} alt='library graphic' draggable='false' className={styles.libraryGraphic} />
            </div>
        </div>
    )
}