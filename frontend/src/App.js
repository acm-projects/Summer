import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Library from './pages/Library'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { Route, Routes, useLocation } from "react-router-dom"

function App() {
	const location = useLocation()

	return (
		<div>
			{location.pathname !== '/login' && <Navbar />}
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/library" element={<Library />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
