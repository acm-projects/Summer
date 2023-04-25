import { IoIosArrowBack } from 'react-icons/io'
import { useHref, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios';
import styles from './styles/Summary.module.css'
import RingLoader from 'react-spinners/RingLoader';
import { MyContext } from '../App'


const Summary = () => {
    const navigate = useNavigate();
    const { summary } = useContext(MyContext)
    const { loading } = useContext(MyContext)

    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
    }

    async function displaySummary(){
        let url = await axios.get("http://localhost:5000/api/videos/")
        console.log(url.data);
        window.open(url.data, '_blank')
    }
    
    return (
        <div className={styles.pageContainer}>
            <div className={styles.backBtn} onClick={handleBack}>
                <IoIosArrowBack /> Back
            </div>

            <div className={styles.summaryContainer}>
                <div className={styles.headerText}>
                    <h1>View Summary</h1>
                    <p>
                        <b>Studying Revolutionized: </b>Read the summary and click on any part to see a preview of your “Summer-ized” video!

                    </p>
                </div>

                <div className={styles.summary}>
                    {loading ? <RingLoader color={'#000000'} size={50}/> : (summary)}
                    {/* {summary} */}
                </div>

                <div className={styles.pdfBtn} onClick={displaySummary}>
                    Download PDF
                 </div>
            </div>
         
        </div>

    )
}

export default Summary