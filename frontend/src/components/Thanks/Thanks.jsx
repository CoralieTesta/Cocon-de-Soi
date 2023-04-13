import { AiOutlineMail } from "react-icons/ai"
import s from "./style.module.css"

export function Thanks() {
    return(
        <aside className={s.aside}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <p>
                        Coralie Testa pour la conception et mise en place  du site<br/>
                        <span className={s.pointer} onClick={()=>window.open('mailto:testa.webdeveloper@gmail.com')}> <AiOutlineMail size={18}/> testa.webdeveloper@gmail.com</span>
                    </p>
                    <p>
                        Yoan Cordonnier (L’Enthousiaste) pour les textes et le référencement<br/>
                        <span className={s.pointer} onClick={()=>window.open('mailto:ecriv.enthousiaste@gmail.com')}> <AiOutlineMail size={18}/> ecriv.enthousiaste@gmail.com</span>
                    </p>
                    <p style={{marginTop:'50px'}}>
                        Mille Mercis pour votre collaboration précieuse, votre écoute, vos propositions et votre professionnalisme ! 🥰
                    </p>
                </div>
            </div>
        </aside>
    )
}