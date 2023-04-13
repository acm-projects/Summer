import { IoIosArrowBack } from 'react-icons/io'
import { useHref, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import {Hero} from  '../components/Hero.js'
import styles from './styles/Summary.module.css'
import axios, { isCancel, AxiosError } from 'axios';

import { MyContext } from '../App'

const Summary = () => {
    const navigate = useNavigate();
    const { link, setLink } = useContext(MyContext)
    const { summary, setSummary }= useContext(MyContext)

    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
    }

    async function displaySummary(){
        let url = await axios.get("http://localhost:5000/api/videos")
        //console.log(url.data);
        window.open(url.data, '_blank')
    }
    
    useEffect(() => {
		links()
	}, [])
	 

	const links = async () => {
        let result = ''
		await axios.post("http://localhost:5000/api/videos",
		{
			URL: link
		},
		
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
		
		
		).then((response) => {
            result = response.data.text
        })
        console.log(result)
		await setSummary(result)
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
                    {summary}
                </div>

            </div>
            <div>
            <button type="button" onClick={displaySummary}>
                Download PDF
            </button>

            </div>
        </div>

    )
}

export default Summary

