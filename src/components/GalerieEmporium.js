import '../css/galerieEmporium.css';

export default function GalerieEmporium(){


    return(
        <div className="galerie-emporium">
            <div className="image border">
                <img src={img1} alt=""/>
            </div>
            <div className="image border">
                <img src={img2} alt=""/>
            </div>
            <div className="image border">
                <img src={img3} alt=""/>
            </div>
            <div className="image">
                <img src={img4} alt=""/>
            </div>
        </div>
    );
}