import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'

import styles from './styles/Summary.module.css'


const Summary = () => {
    const navigate = useNavigate();
    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
    }

    return (
        <div className={styles.pageContainer}>
            {/* <div className="back-btn" onClick={handleBack}>
                <IoIosArrowBack /> Back
            </div> */}

            <div className={styles.headerText}>
                <h1>View Summary</h1>
                <p>
                    <b>Studying Revolutionized: </b>Read the summary and click on any part to see a preview of your “Summer-ized” video!
                </p>
            </div>

            <div className={styles.summary}>

            </div>
            
            <Footer />
        </div>

    )
}

export default Summary