import Hero from "../components/Hero";
import Line from "../components/Line";
import Footer from "../components/Footer";
import YouTubeGraphic from '../assets/YouTubeGraphic.png'
import Bubbles from '../assets/Bubbles.png'
import CheckCircle from '../assets/CheckCircle.png'
import LineCircle from '../assets/LineCircle.png'

import './styles/Home.css'

export default function Home() {
    return (
        <div>
            <Hero/>
            <div style={{paddingTop: "320px"}}>
                <Line/>
            </div>

            {/* Feature section */}
            <div className="feature-section">
                <img src={YouTubeGraphic} alt='graphic'/>
                
                <div className='feature-text'>
                    <div className='summary'>
                        <div className='feature-title'>
                            <img src={LineCircle} alt='linecircle'/>
                            <h1 className='feature-header'>Summary</h1>
                        </div>
                        <div className='feature-subtext'>
                            <p>Learn faster and create an outlined summary for your desired videos, all in a few clicks.</p>
                        </div>
                    </div>
                    <div className='quizzing'>
                        <div className='feature-title'>
                            <img src={CheckCircle} alt='check'/>
                            <h1 className='feature-header'>Quiz Generation</h1>
                        </div>
                        <div className='feature-subtext'>
                            <p>Generate quizzes of all types on the fly for more informational videos you especially want to remember.</p>
                        </div>
                    </div>
                </div>

                <img src={Bubbles} alt='bubbles' className='bubble-right'/>
                <img src={Bubbles} alt='bubbles' className='bubble-left'/>
            </div>

            {/* Library section */}

            {/* Footer */ }
            <Footer />
        </div>
    )
}