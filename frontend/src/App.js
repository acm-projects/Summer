import { Route, Routes, useLocation } from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Library from './pages/Library'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Summary from './pages/Summary';
import GeneralPage from './pages/GeneralPage';

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
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/summary" element={<Summary/>} />
					<Route path="/general" element={<GeneralPage/>} />
				</Routes>
			</div>

			{location.pathname !== '/login' 
				&& location.pathname !== '/signup'
				&& <Footer />}
		</div>
	);
}

export default App;
