import React from 'react';
import Fade from 'react-reveal/Fade';
import Work from './Work';
import About from './About';

const Home = () => {
   
    return(
        <div className="home-wrapper">
        <div className="title">
            <Fade duration={1500}>
                <h1>Jason <br /> Enstedt</h1>
                <h2>Web Developer / Designer</h2>
            </Fade>
            <div className="buttons">
                <a href="#work-jump" className="button" id="button1">Portfolio</a>
                <a href="#work-jump" className="button">Contact</a>
            </div>
            <Fade delay={1800}>
                <div className="scroll-down">
                    <a href="#about">
                    Scroll <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    </a>
                    
                </div>
            </Fade>
        </div>
        
        <About />
        <Work />
        </div>
    );
    
}
export default Home;