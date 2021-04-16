import '../css/galerie.css';
import GalerieSiteDuChef from './GalerieSiteDuChef';
import GalerieEmporium from './GalerieEmporium';


export default function Galerie(props){


    return(
        <section className={props.class}>
            <div className="title-container">
                <h3>Site Du Chef</h3>
                <h2 className="galerie-title">Galerie</h2>
                <h3>Emporium</h3>
            </div>
            
            <div className="galerie-container">
                <GalerieSiteDuChef />
                <GalerieEmporium />
            </div>
            
            
        </section>
    );
} 