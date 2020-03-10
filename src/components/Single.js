import React from 'react';
import Fade from 'react-reveal/Fade';
import { useLocation, Link} from 'react-router-dom';
import Gist from 'react-gist';

import works from '../projects.json';

const Single = () => {
    var project = null;
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname == "/project/Cinephile"){
        var project = 0;
    }else if(location.pathname == "/project/Bambrush"){
        var project = 1;
    }else if(location.pathname == "/project/Turtles"){
        var project = 2;
    }else if(location.pathname == "/project/Forge"){
        var project = 3;
    }else if(location.pathname == "/project/Portfolio"){
        var project = 4;
    }
    console.log(project);
     console.log(works.projects[project].title);
     let techs = works.projects[project].technologies.map((tech)=>{
        return(
           <p>{tech}</p> 
        )
        
    })
    
    if(project + 1 == 5){
        var nextproject = 0;
    }else{
        var nextproject = project + 1;
    }
    return(
        <div className="single">
            <h1>{works.projects[project].title}</h1>
            <img src={process.env.PUBLIC_URL + works.projects[project].mainimage}></img>
            <div className="technologies">
                        {techs}
            </div>
            <div className="live-site">
                <a href={works.projects[project].liveurl} target="_blank" rel="noopener noreferrer">View Live Site</a>
            </div>
            <p>{works.projects[project].excerpt}</p>
            
            <h2>Development</h2>
            <p>{works.projects[project].featuretext}</p>
            <video width="80%" height="60%" autoplay controls><source src={process.env.PUBLIC_URL + works.projects[project].featuregif} type="video/webm" /> </video>
            
            <Gist id={works.projects[project].gist} />
            

            <p>{works.projects[project].devsetuptext}</p>
            <h2>Design</h2>
            <img src={process.env.PUBLIC_URL + works.projects[project].designimage}></img>
            <p>{works.projects[project].designtext}</p>
            <div className='next-project'>
                <Link to={`/project/${works.projects[nextproject].title}`}>Next project</Link>
            </div>
            
        </div>
    );
}
export default Single;