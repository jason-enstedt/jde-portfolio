import React from 'react';
import {Link} from 'react-router-dom';
import github from '../images/github (1).png';
import instagram from '../images/instagram (3).png';
import linkedin from '../images/linkedin (1).png';
import Fade from 'react-reveal/Fade';
const Header = () => {
    
    return(
        <div>
            
            <div className="bars">
                <div className="top-bar">
                    <Link to="/" exact>JDE</Link>
                </div>
               
                <div className="left-bar">
                    <Fade left cascade>
                        <a href="https://www.github.com/jason-enstedt" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo" ></img></a>
                        <a href="https://www.instagram.com/jde.photography" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram logo"></img></a>
                        <a href="https://linkedin.com/in/jason-enstedt" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"></img></a>
                    </Fade> 
               </div>
                
            </div>
            {/* <div className="main-nav">
                <nav>
                    <ul>
                        <Link>
                            <li>
                                Projects
                            </li>
                        </Link>
                        
                        <Link>
                            <li>
                                About
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div> */}
        </div>
        
    );
}
export default Header;