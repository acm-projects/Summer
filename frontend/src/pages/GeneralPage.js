import { useNavigate } from "react-router-dom"

const GeneralPage = () => {
    const navigate = useNavigate();

    function handleSummary(e) {
        e.preventDefault()
        navigate('/summary')
    }

  return (
    
    <div onClick={handleSummary}>GeneralPage</div>
  )
}

export default GeneralPage