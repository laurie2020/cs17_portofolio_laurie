import '../css/logo.css'
import logo from '../img/html.png';
import React, {useState} from 'react';


export default function Logo(props){
    
    const [logoClass, setLogoClass] = useState('jauge')

    let changeLogo = () => {
        setLogoClass(props.class);
    }

    let chnageBackLogo = () => {
        setLogoClass('jauge');
    }
     return(
        <div className='logo' onMouseOver={changeLogo} onMouseLeave={chnageBackLogo}>
            <img src={props.logo} width="125" height="125" />
            <div className={logoClass}>
                <p className="level">{props.level}%</p>
            </div>
        </div>
    );
}