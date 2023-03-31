import { Route, Routes, useLocation } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Library from './pages/Library'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Summary from './pages/Summary';
import GeneralPage from './pages/GeneralPage';
import QuizPage from './pages/QuizPage';


import './App.css';

function App() {
	const location = useLocation()

	return (
		<div>
			{location.pathname !== '/login' 
				&& location.pathname !== '/signup'
				&& <Navbar />}
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/library" element={<Library />} />
					<Route path="/quizpage" element={<QuizPage />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/summary" element={<Summary/>} />
					<Route path="/general" element={<GeneralPage/>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;