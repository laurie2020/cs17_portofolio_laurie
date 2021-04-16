import '../css/galerieSiteDuChef.css';
import img1 from '../img/galerie/site_du_chef_entier.png';
import img2 from '../img/galerie/site_du_chef_responsive.png';
import img3 from '../img/galerie/site_du_chef_fonctinnalite.png';
import img4 from '../img/galerie/site_du_chef_fonctionnalite_2.png';

export default function GalerieSiteDuChef(){


    return(
        <div className="galerie-chef">
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
        </div>
    );
}