import { Route, Routes, useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Summary from "./pages/Summary";
import GeneralPage from "./pages/GeneralPage";
import QuizPage from "./pages/QuizPage";
import VideoLinkInput from "./pages/VideoLinkInput";
import Footer from "./components/Footer";

import "./App.css";

export const MyContext = createContext();

function App() {
  const location = useLocation();
  const [link, setLink] = useState([]);
  const [summary, setSummary] = useState('');

  return (
    <MyContext.Provider value={{ link, setLink, summary, setSummary }}> 
      <div>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Navbar />
        )}

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/videolinkinput" element={<VideoLinkInput />} />
            <Route path="/general" element={<GeneralPage />} />
          </Routes>
        </div>

        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;