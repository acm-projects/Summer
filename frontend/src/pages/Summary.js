import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import styles from './styles/Summary.module.css'
import { MyContext } from '../App'

const Summary = () => {
    const navigate = useNavigate();
    const { link, setLink } = useContext(MyContext)
    const { summary, setSummary } = useContext(MyContext)
    const [loading, setLoading] = useState(false)

    function handleBack(e) {
        e.preventDefault();
        navigate('/general')
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
        setLoading(true)
        console.log(result)
        await setSummary(result)
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.backBtn} onClick={handleBack}>
                <IoIosArrowBack /> Back
            </div>

            <div className={styles.summaryContainer}>
                <div className={styles.headerText}>
                    <h1>Summary</h1>
                    <p>
                        Learn more effectively with this concise summary page.
                    </p>
                </div>

                <div className={styles.summary}>
                    {/* {loading ? (summary) : <Spinner animation='border' />} */}
                    {<Spinner animation='border'/>}

                </div>

                <div>
                    <div className={styles.pdfBtn}>
                        DOWNLOAD PDF
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary