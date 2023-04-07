import { Article } from "../Article/Article"
import s from "./style.module.css"

export function GiftCardText() {
    const text= 
    <>
    <p>
        Une idée cadeau originale qui plaira à coup sûre !
    </p>
    <p>
        Offrez un massage bien-être à l'occasion d'un anniversaire, Noël, la Saint Valentin, la fête des mères, des grands-mères et bien sur des pères ou des grands-pères, à l'occasion d'une grossesse, d'une naissance ou tout simplement pour le plaisir d'offrir.
    </p>
    <p className={s.question}>
        Comment offrir un Bon Cadeau ?
    </p>
    <p>
        Vous avez deux possibilités : 
        <ol>
            <li>
                Sous format cartonné : Passer le chercher au salon Cocon de Soi, sur rendez-vous.  
            </li>
            <li>
                Sous format numérique : Le recevoir par mail, à imprimer vous-même. Il est alors nécessaire de m'adresser un mail avec les données que vous souhaitez voir apparaître sur le chèque-cadeau : Offert à... De la part de... pour un massage ... d'une durée de...  
            </li>
        </ol>
    </p>
    <p>
    Le règlement se fera par chèque ou par virement au compte de Perrine Lacoste FR76 1382 5002 0004 0572 3314 481 nom et prénom du bénéficiaire en communication.
    </p>
    <p>
        Le chèque-cadeau vous sera transmis par mail dès réception du montant et sera valable 6 mois.
    </p>
    <p className={s.question}>
    Comment utiliser un bon cadeau offert ? 
    </p>
    <p>
    Il vous suffit de prendre rendez-vous par téléphone : si je ne réponds pas laissez-moi un message, 
    je dois probablement être en soin, je vous rappellerai dans les meilleurs délais, messagerie/SMS, via le bouton rendez-vous sur ma page Facebook, WhatsApp  
    Le jour de votre rendez-vous, présentez-vous muni du bon cadeau que vous avez reçu.
    </p>
    </>
    return(
        <Article title="Pour le plaisir d'offrir" text={text}/>
    )
}