import '../css/app.css';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Galerie from './Galerie';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './Contact';
import Chef from './Chef';
import Emporium from './Emporium';

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
        setGalerie('galerie')
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

    // navigation vers la galerie
    const [galerie, setGalerie] = useState('galerie');
    
    let enterGalerie = () => {
        setGalerie('galerie-show');
    }

    let leaveGalerie = () => {
        if(galerie === 'galerie-show'){
            setGalerie('galerie');
        }
        
    }
    let confirmGalerie = () => {
        setGalerie('galerie-confirm');
        setColor('black');
    }

    let handleAbout = (change) => {
        setAbout(change);
    }
    return(
        <div className={"app " + color}>               
            <Router>
                    <Header returnHome={returnHome} />
                    <Route path="/" exact render={() => 
                    <Navigation enterAbout={enterAbout}  
                        leaveAbout={leaveAbout} 
                        confirmAbout={confirmAbout} 
                        enterSkills={enterSkills} 
                        leaveSkills={leaveSkills} 
                        confirmSkills={confirmSkills} 
                        enterGalerie={enterGalerie} 
                        leaveGalerie={leaveGalerie} 
                        confirmGalerie={confirmGalerie}
                        handleAbout={handleAbout}
                    />} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/site_du_chef" exact component={Chef} />
                    <Route path="/emporium" exact component={Emporium} />
                
            </Router>
            <About class={about} />
            <Skills class={skills}/>
            <Galerie class={galerie} />
        </div>
    );
}