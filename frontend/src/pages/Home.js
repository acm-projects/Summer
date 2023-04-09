import Hero from "../components/Hero";
import Line from "../components/Line";
import YouTubeGraphic from '../assets/YouTubeGraphic.png'
import Bubbles from '../assets/Bubbles.png'
import CheckCircle from '../assets/CheckCircle.png'
import LineCircle from '../assets/LineCircle.png'

import styles from './styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className={styles.linePadding}>
                <Line/>
            </div>

            {/* Feature section */}
            <div className={styles.featureSection}>
                <img src={YouTubeGraphic} alt='graphic' draggable="false"/>
                
                <div className={styles.featureText}>
                    <div className={styles.summary}>
                        <div className={styles.featureTitle}>
                            <img src={LineCircle} alt='linecircle' draggable="false"/>
                            <h1 className={styles.featureHeader}>Summary</h1>
                        </div>
                        <div className={styles.featureSubtext}>
                            <p>Learn faster and create an outlined summary for your desired videos, all in a few clicks.</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.featureTitle}>
                            <img src={CheckCircle} alt='check' draggable="false"/>
                            <h1 className={styles.featureHeader}>Quiz Generation</h1>
                        </div>
                        <div className={styles.featureSubtext}>
                            <p>Generate quizzes of all types on the fly for more informational videos you especially want to remember.</p>
                        </div>
                    </div>
                </div>

                <img src={Bubbles} alt='bubbles' className={styles.bubbleRight} draggable="false"/>
                <img src={Bubbles} alt='bubbles' className={styles.bubbleLeft} draggable="false"/>
            </div>

            {/* Library section */}

        </div>
    )
}