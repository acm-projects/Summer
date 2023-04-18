import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bubbles from '../assets/Bubbles.png'
import PinkCircle from '../assets/PinkCircle.png'
import BlueCircle from '../assets/BlueCircle.png'
import GradientGraphic from '../assets/GradientGraphic.png'

import styles from './styles/VideoLinkInput.module.css';

function VideoLinkInput() {
	return (
        <div className={styles.VideoLinkInput}>
        <header>
        <div className={styles.videoheadtext}>
            <div className={styles.headImage}>
                <img src={GradientGraphic} alt='Gradient'/>
            </div>
            <div className={styles.videolinkTextOnImage}>
                <vidh3 style={{ fontSize: 30 }}>Built for videos of all types. </vidh3>
                <vidh6 style={{ fontSize: 25 }}>Generate Summer-ies with just a click.</vidh6>
                <div> </div>

                <div className={styles.videolinkHeroSearch}>
                    <input type='text' className={styles.videolinkInput}
                        placeholder='Enter Youtube Link '/>
                    <button className={styles.videolinkSearchButton} type='button'>
                        <span>SUMMERIZE</span>
                    </button>
                </div>
            </div>
        </div >

    </header >

    </div>

    );
}

export default VideoLinkInput;