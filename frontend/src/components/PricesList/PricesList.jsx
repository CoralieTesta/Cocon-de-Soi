import { BsFlower3 } from "react-icons/bs";
import s from "./style.module.css"

export function PricesList() {
    return(
        <section className={s.section}>
            <div className={s.container}>
                <span className={s.title}>Tarifs de base</span>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold}>60 €</span> massage 1h à 1h30 selon le besoin du client
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold}>45 €</span> massage sur zone ciblé  45 min de massage
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold}>30 €</span>  massage sur zone ciblé  30 min de massage
                    </li>
                </ul>
                <hr className={s.hr}/>
                <span className={s.title}>Forfaits</span>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        3 massages global 1h à 1h30 = <span className={s.bold}>150 €</span> au lieu de 180 €
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        5 massages  global 1h à 1h30 = <span className={s.bold}>240 €</span> au lieu de 300 €
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        10 massages  global 1h à 1h30 = <span className={s.bold}>480 €</span> au lieu de 600 €
                        </li>
                </ul>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        3 massages sur zone ciblé  45 min = <span className={s.bold}>120 €</span> au lieu de 135 €
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        5 massages sur zone ciblé  45 min = <span className={s.bold}>190 €</span> au lieu de 225 €
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        10 massages sur zone ciblé  45 min = <span className={s.bold}>330 €</span> au lieu de 450 €
                    </li>
                </ul>
            </div>
        </section>
    )
}