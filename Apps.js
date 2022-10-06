// import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skill from "./resume/Skill";
import Profile from "./resume/Profile";
import About from "./resume/About";
import Nav from "./resume/Nav";
import Cv from "./resume/Resume";
import react, {useState, useEffect, createContext,} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
// import Footer from './resume/Footer'
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { SocialIcon } from 'react-social-icons';
import 'font-awesome/css/font-awesome.min.css'; 
import ReactSwitch from "react-switch";




export const ThemeContext = createContext(null);

AOS.init();
AOS.refresh();
const Apps = () => {
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5);
    }, []);
    //theme switch
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return(  
        <div>
            {loading ? (
                <div className='app'>

                    < div className='mae'>
                    <ScaleLoader color='#00008b'  speedMultiplier={0.5}  loading={loading} />
                </div>
                    </div>
            ): 
                (<div className='route' id={theme}> 
    < ThemeContext.Provider value={{ theme, toggleTheme }}>
                    
                    <Router>
                            <Nav />
                            <span  className="na">
                            <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark "} />
                            </span>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/about" element={<About className='about' />} />
                <Route path="/skill" element={<Skill/>} />
                <Route path="/resume" element={<Cv />} />
                        </Routes>
                        {/*  */}
                        </Router>
                    </ThemeContext.Provider>
                        
                    </div>
                )}
        </div>
    );
}

export default Apps;