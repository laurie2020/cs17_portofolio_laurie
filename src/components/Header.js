import '../css/header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder, faFolderOpen} from '@fortawesome/fontawesome-free-solid';
import React, {useState} from 'react';

export default function Header(props){

    const [icon, setIcon] = useState(faFolder);
    return(
        <header>
            <nav className="navigation">
                <span className="nav-item" onClick={props.returnHome} >Iula-Elese Laurie</span>
                <div className="dropdown" onMouseEnter={() => {setIcon(faFolderOpen)}} onMouseLeave={() => {setIcon(faFolder)}}>
                    <button className="folder-button"><FontAwesomeIcon icon={icon} /></button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-content">Skills</li>
                        <li className="dropdown-content">Galerie</li>
                        <li className="dropdown-content">About</li>
                    </ul>
                </div>
                <span className="nav-item">Contact</span>
            </nav>
        </header>
    );
}