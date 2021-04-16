import '../css/galerieEmporium.css';
import img1 from '../img/galerie/emporium_entier.png';
import img2 from '../img/galerie/emporium_4.png';
import img3 from '../img/galerie/emporium_1.png';
import img4 from '../img/galerie/emporium_2.png';
import img5 from '../img/galerie/emporium_3.png';

export default function GalerieEmporium(){


    return(
        <div className="galerie-emporium">
            <div className="image">
                <img src={img1} alt=""/>
            </div>
            <div className="image">
                <img src={img2} alt=""/>
            </div>
            <div className="image">
                <img src={img3} alt=""/>
            </div>
            <div className="image">
                <img src={img4} alt=""/>
            </div>
            <div className="image">
                <img src={img5} alt=""/>
            </div>
        </div>
    );
}