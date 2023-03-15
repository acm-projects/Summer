import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Library from './pages/Library'
import SignIn from './pages/SignIn'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
