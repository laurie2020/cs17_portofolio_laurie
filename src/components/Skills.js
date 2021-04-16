import '../css/skills.css';
import Logo from "./Logo";
import html from '../img/html.png';
import css from '../img/css.png';
import sass from '../img/sass.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import nodejs from '../img/nodejs.png';
import bash from '../img/bash.png';
import javascript from '../img/javascript.png';
import github from '../img/github.png';

export default function Skills(props){


    return(
        <section className={props.class}>
            <h2 className="skills-title">My Skills</h2>
            <div className="container">
                <div className="row">
                    <Logo class="logo95" level="95" logo={html} />
                    <Logo class="logo20" level="20" logo={nodejs} />
                    <Logo class="logo95" level="95" logo={css} />
                    <Logo class="logo85" level="85" logo={react} />
                    <Logo class="logo25" level="25" logo={redux} />
                </div>
                <div className="row">
                    <Logo class="logo70" level="70" logo={github} />
                    <Logo class="logo95" level="95" logo={sass} />
                    <Logo class="logo30" level="30" logo={bash} />
                    <Logo class="logo95" level="95" logo={javascript} />
                </div>
            </div>
        </section>
    );
}