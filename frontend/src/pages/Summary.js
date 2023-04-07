import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import {Hero, YoutubeURL } from  '../components/Hero.js'
import styles from './styles/Summary.module.css'
import axios, { isCancel, AxiosError } from 'axios';


const Summary = () => {
    const navigate = useNavigate();

    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
    }


const displaySummary = (link) => {
    let result = "";
     axios.post(
        "http://localhost:5000/api/videos",

        {
            transcript: link
        },

        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }

    ).then((response) => {
        console.log(response.data.text)
        result = response.data.text
        
    })
    
    .catch((err) => {
        console.log("error with getting summary")
        console.log(err);

    })

    return result;

}


    return (
        <div className={styles.pageContainer}>
            {/* <div className={styles.back-btn" onClick={handleBack}>
                <IoIosArrowBack /> Back
            </div> */}

            <div className={styles.summaryContainer}>
                <div className={styles.headerText}>
                    <h1>View Summary</h1>
                    <p>
                        <b>Studying Revolutionized: </b>Read the summary and click on any part to see a preview of your “Summer-ized” video!

                    </p>
                </div>

                <div className={styles.summary}>
                    {displaySummary(YoutubeURL)}
                </div>

            </div>
            <div>
            <button type="button">
                Download PDF
            </button>

            </div>
        </div>

    )
}

export default Summary