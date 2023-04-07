import s from "./style.module.css"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiOutlineFacebook } from "react-icons/ai"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { Linking } from "react-native";
import { ContactBoxB } from "../ContactBoxB/ContactBoxB";
import { ContactBoxBComplement } from "../ContactBoxBComplement/ContactBoxBComplement";



export function ContactBoxListB() {
    function callHandler() {
        Linking.openURL(`tel:06.84.59.12.98`)
    }
    function sendMailHandler() {
        window.open('mailto:perrinecocondesoi@gmail.com')
    }

    function sendMapHandler() {
        window.open("https://maps.google.com?q="+45.95496070840246+","+5.339680837379062);
    }
    function facebookHandler() {
        window.open("https://www.facebook.com/CocoondeSoi.fr")
    }
    return(
        <div className={s.container}>
            <ContactBoxB 
                logo={<BsTelephone size={50}/>}
                action={callHandler} 
                text="06.84.59.12.98"
                title="Téléphone" 
            />
            <ContactBoxB 
                logo={<AiOutlineMail size={50}/>}
                action={sendMailHandler} 
                text="perrinecocondesoi@gmail.com"
                title="E-mail" 
            />
            <ContactBoxB 
                logo={<HiOutlineBuildingOffice size={50}/>}
                action={sendMapHandler} 
                text="26 Avenue du Générale Sarrail, 01500 Ambérieu en Bugey"
                title="Itinéraire" 
            />
            <ContactBoxBComplement  
                logo={<HiOutlineBuildingOffice size={50}/>}
                text="Je peux également vous recevoir sur Chazey sur Ain"
                title="Complément d'adresse" 
            />
            <ContactBoxB
                logo={<AiOutlineFacebook size={50}/>}
                action={facebookHandler} 
                text="Perrine Cocon de Soi"
                title="Facebook" 
            />
        </div>
    )
}