import { Logo } from "../Logo"
import { BsFacebook} from "react-icons/bs"
import s from "./style.module.css"
import { Mail } from "../Mail/Mail"
import { Phone } from "../Phone/Phone"
import { useNavigate } from "react-router-dom"
import { AiOutlineMail } from "react-icons/ai"

export function Footer() {
    const navigate = useNavigate()
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <Logo 
                    name="Sarah Demanez" 
                    job="Kinésithérapeute" 
                    className={s.logo}
                    onClick={()=> navigate('/')} 
                />
                <div className={s.copyright}>
                    © 2023. All rights reserved.
                </div>
                
            </div>
            <div className={s.contactContainer}>
                <div className={s.mailPhone}>
                    <Mail />
                    <Phone />
                </div>
                <div className={s.socialNetworks}>
                    <a href="https://www.facebook.com/CocoondeSoi.fr" target="_blank" rel="noopener noreferrer"><BsFacebook style={{color:"white"}} size={25} className={s.facebookLogo}/></a>
                </div>
                <div className={s.references}>
                    <p>
                        Développeuse web du site: Coralie Testa<br/>
                        <span className={s.pointer} onClick={()=>window.open('mailto:testa.webdeveloper@gmail.com')}> <AiOutlineMail size={18}/> testa.webdeveloper@gmail.com</span>
                    </p>
                    <p>
                        Rédacteur web du site: Yoan Cordonnier (L’Enthousiaste) <br/>
                        <span className={s.pointer} onClick={()=>window.open('mailto:ecriv.enthousiaste@gmail.com')}> <AiOutlineMail size={18}/> ecriv.enthousiaste@gmail.com</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}