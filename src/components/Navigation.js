import '../css/navigation.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowLeft, faArrowRight} from '@fortawesome/fontawesome-free-solid';
import React, {useState} from 'react';


export default function Navigation(props){

    let [up, setUp] = useState('arrow-up');
    let [left, setLeft] = useState('arrow-left');
    const [right, setRight] = useState('arrow-right');

    let handleArrow = () => {
        setUp('arrow-up-show');
        setLeft('arrow-left-show');
        setRight('arrow-right-show');
        props.handleAbout('about-bis')
    }

    let handleArrowHide = () => {
        setUp('arrow-up');
        setLeft('arrow-left');
        setRight('arrow-right');
    }
    return(
        <div className="nav-container">
            <div className="nav-parent" onMouseLeave={handleArrowHide}>
                <div className="arrowU arrow-container">
                    <FontAwesomeIcon icon={faArrowUp} className={"arrow " + up} onMouseEnter={props.enterAbout} onMouseLeave={props.leaveAbout} onClick={props.confirmAbout} />
                </div>
                <div className="arrowLR">
                    <div className="arrow-container">
                        <FontAwesomeIcon icon={faArrowLeft} className={"arrow " + left} onMouseEnter={props.enterSkills} onMouseLeave={props.leaveSkills} onClick={props.confirmSkills} />
                    </div>
                    <div className="menu-circle"  onMouseEnter={handleArrow} onMouseLeave={() => {props.handleAbout('about')}}>
                    </div>
                    <div className="arrow-container">
                        <FontAwesomeIcon icon={faArrowRight} className={"arrow " + right} onMouseEnter={props.enterGalerie} onMouseLeave={props.leaveGalerie} onClick={props.confirmGalerie} />
                    </div>
                </div>
            </div>
                
        </div>
    );
}