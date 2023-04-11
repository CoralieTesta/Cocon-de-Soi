import { Link } from "react-router-dom"
import { Article } from "../Article/Article"
import s from "./style.module.css"

export function GiftCardText() {
    const text= 
    <>
        <p>
            Une idée cadeau originale qui plaira à coup sûr.
        </p>
        <p>
            <strong>Offrez un massage bien-être</strong> à l'occasion d'un anniversaire, Noël, la Saint Valentin, la fête des mères, des grands-mères et bien sûr des pères ou des grands-pères... Mais aussi à l'occasion d'une grossesse, d'une naissance ou tout simplement <strong>pour le plaisir d'offrir</strong>.  
        </p>
        <h2  className={s.question}>
            Comment offrir un Bon Cadeau bien-être ?
        </h2>
        <p>
            Vous avez deux possibilités : 
            <ol>
                <li>
                    Sous format cartonné : Passez le chercher au salon Cocon de Soi, sur rendez-vous. 
                </li>
                <li>
                    Sous format numérique : Recevez-le par mail (à imprimer vous-même). Il est alors nécessaire de m'adresser un courriel avec les données que vous souhaitez voir apparaître sur le chèque-cadeau : Offert à... de la part de... pour un massage... d'une durée de…
                </li>
            </ol>
        </p>
        <p>
            Le règlement se fera : 
            <ul>
                <li>Par chèque.</li>
                <li>Par virement au compte de Perrine Lacoste FR76 1382 5002 0004 0572 3314 481 nom et prénom du bénéficiaire en communication.</li>
            </ul>
        </p>
        <p>
            Le chèque-cadeau vous sera transmis par mail dès réception du montant et sera valable 6 mois.
        </p>
        <h2 className={s.question}>
            Comment utiliser un Bon cadeau bien-être offert ?
        </h2>
        <p>
            Il vous suffit de prendre rendez-vous par : 
            <ul>
                <li>appel téléphonique (Si je ne réponds pas, laissez-moi un message. Je dois probablement être en train de faire un massage, je vous rappellerai dans les meilleurs délais.) ;</li>
                <li>SMS sur le même numéro ;</li>
                <li>via le bouton <Link className={s.link} to="https://www.facebook.com/CocoondeSoi.fr"  target="_blank" rel="noopener noreferrer">rendez-vous</Link> sur ma page Facebook ;</li>
                <li>WhatsApp.</li>
            </ul>
        </p>
        <p>
            Le jour de votre rendez-vous, veuillez vous présenter avec le Bon Cadeau que vous avez reçu.
        </p>
    </>
    return(
        <Article text={text}/>
    )
}