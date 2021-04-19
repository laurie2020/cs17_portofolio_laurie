import '../css/header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder, faFolderOpen} from '@fortawesome/fontawesome-free-solid';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Header(props){

    const [icon, setIcon] = useState(faFolder);
    return(
        <header>
            <nav className="navigation">
                <Link to="/">
                    <span className="nav-item" onClick={props.returnHome} >Iula-Elese Laurie</span>
                </Link>
                <div className="dropdown" onMouseEnter={() => {setIcon(faFolderOpen)}} onMouseLeave={() => {setIcon(faFolder)}}>
                    <button className="folder-button"><FontAwesomeIcon icon={icon} /></button>
                    <ul className="dropdown-menu">
                        <Link to="/site_du_chef">
                           <li className="dropdown-content">Sit Du Chef</li>
                        </Link>
                        <Link to="/emporium">
                            <li className="dropdown-content">Emporium</li>
                        </Link>
                    </ul>
                </div>
                <Link to="/contact">
                    <span className="nav-item" onClick={props.returnHome}>Contact</span>
                </Link>
            </nav>
        </header>
    );
}