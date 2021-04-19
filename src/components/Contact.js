import '../css/contact.css';

export default function Contact(){


    return(
        <div className="contact">
            <div className="contact-container">

                <div className="number-container">
                    <h2 className="number-title">Mon Numéro : <a tel="0455555555" className="number">0455555555</a></h2>
                </div>
                <div className="message-container">
                    <h2 className="message-title">Envoyez-moi un message:</h2>
                    <form action="" className="form">
                        <label htmlFor="nom">Nom:</label>
                        <input type="text" name="nom" required={true}/>
                        <label htmlFor="prenom">Prenom:</label>
                        <input type="text" name="prenom" required={true}/>
                        <label htmlFor="email">Adresse Email:</label>
                        <input type="email" name="email" required={true}/>
                        <label htmlFor="num">Numero de telephone(optionnel):</label>
                        <input type="text" name="num"/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="10" required={true}></textarea>
                        <input type="submit" className="submit"/>
                    </form>
                </div>
            </div>
            
        </div>
        
    );
}