import React from 'react';
import Fade from 'react-reveal/Fade';


const About = () => {
    
    return(
        <Fade >
            <div className="about" id="about">
                
                <div className="content">
                    <div className="about-title">
                        <Fade right>
                            <h2>Who? Me?</h2>
                        </Fade>
                    </div>
                    
                    <p><span>Hey!</span> It's Jason here. Glad you found your way here to my portfolio site.
                        Feel free to look around! If you're wondering who I am, well I'll tell you.
                        I am a Web Developer from the beautiful city of Vancouver. I started out doing
                        photography, did that for a few years, but decided I wanted to do something 
                        different. One thing led to another, and I decided to take the Technical Web Designer
                        program at BCIT. I have expierence with HTML 5, CSS, Javascript, SASS, Node, React.js, PHP, 
                        Wordpress...and a bunch of other web related things. Want to get in touch? 
                        <a href="#0">Click Here</a> to get in touch!
                    </p>
                </div>
                
            </div>
        </Fade>
    );
}
export default About;