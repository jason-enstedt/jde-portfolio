import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import works from '../projects.json';

const Work = () => {
    
    let loopwork = works.projects.map((work)=>{
        let techs = work.technologies.map((tech)=>{
            return(
               <p>{tech}</p> 
            )
            
        })
        return(
            <Fade>
                <div className="work">
                    <h3>{work.title}</h3>
                    <div className="work-image">
                        <img src={process.env.PUBLIC_URL + work.mainimage}  ></img>
                    </div>
                    
                    <div className="technologies">
                        {techs}
                    </div>
                    <div className="more-link">
                        <Link to ={`/project/${work.title}`}  >View More</Link>
                    </div>
                </div>
            </Fade>
        )
    });
    return(
        <div className="works" id="work-jump">
            <div className="transition">

            </div>
            <div className="all-works">

                <div className="works-title">
                    <Fade right >
                        <h2>Projects</h2>
                    </Fade>
                </div>
                {loopwork} 
                
            </div>
        </div>
    );
}
export default Work;