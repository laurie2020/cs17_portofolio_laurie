import '../css/app.css';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Galerie from './Galerie';
import React, {useState} from 'react';

export default function App(){

    
    const [color, setColor] = useState('');
    // navigation vers la section about
    const [about, setAbout] = useState('about');
    let enterAbout = () => {
        setAbout('about-show');
    }
    let leaveAbout = () => {
        if(about === "about-show"){
            setAbout('about');
        }
        
    }
    let confirmAbout = () => {
        setAbout('about-confirm');
        setColor('black');
    }

    
    // navigation vers l'accueil
    let returnHome = () => {
        setAbout('about');
        setSkills('skills');
        setColor('');
    }

    // navigation vers la section skills

    const [skills, setSkills] = useState('skills');
    let enterSkills = () => {
        setSkills('skills-show');
    }
    let leaveSkills = () => {
        if(skills === "skills-show"){
            setSkills('skills');
        }
        
    }
    let confirmSkills = () => {
        setSkills('skills-confirm');
        setColor('black');
    }
    return(
        <div className={"app " + color}>
            <Header returnHome={returnHome} />
            <Navigation 
            enterAbout={enterAbout} 
            leaveAbout={leaveAbout} 
            confirmAbout={confirmAbout}
            enterSkills={enterSkills}
            leaveSkills={leaveSkills}
            confirmSkills={confirmSkills}
            />
            <About class={about} />
            <Skills class={skills}/>
            <Galerie />
        </div>
    );
}