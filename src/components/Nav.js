import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Nav = () => {
    const openclose = () =>{
       let closebtn = document.getElementById("main-nav-mobile");
       let buttonanimation = document.getElementById("btn-btn");
        if(closebtn.classList.contains("open")){
            closebtn.classList.remove("open");
            buttonanimation.classList.remove("active");
            buttonanimation.classList.add("not-active");
        }else{
            closebtn.classList.add("open");
            buttonanimation.classList.remove("not-active");
            buttonanimation.classList.add("active");
        }
       
    }
    return(
        <div className="nav" id="main-nav-mobile">
            
            <div className="box" id="box" onClick={openclose}>
                <div className="btn not-active" id="btn-btn">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                </div>
              </div>
            <div className="main-nav-mobile">
               
                <nav>
                    <ul>
                        <Link to="/" exact onClick={openclose}>
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to="/#work-jump" exact onClick={openclose}>
                            <li>
                                Projects
                            </li>
                        </Link>
                        
                        <Link to="/#about" exact onClick={openclose}>
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
            </div>
        </div>
            
        
        
    );
}
export default Nav;