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
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>60 €</span> massage 1h à 1h30 selon le besoin du client
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>45 €</span> massage sur zone ciblé  <span style={{ whiteSpace: 'nowrap' }}>45 min</span> de massage
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>30 €</span>  massage sur zone ciblé  <span style={{ whiteSpace: 'nowrap' }}>30 min</span> de massage
                    </li>
                </ul>
                <hr className={s.hr}/>
                <span className={s.title}>Forfaits</span>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        3 massages 1h à 1h30 = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>150 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>180 €</span>
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        5 massages  1h à 1h30 = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>240 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>300 €</span>
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        10 massages  1h à 1h30 = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>480 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>600 €</span>
                        </li>
                </ul>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        3 massages sur zone ciblé  <span style={{ whiteSpace: 'nowrap' }}>45 min</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>120 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>135 €</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        5 massages sur zone ciblé  <span style={{ whiteSpace: 'nowrap' }}>45 min</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>190 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>225 €</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        10 massages sur zone ciblé  <span style={{ whiteSpace: 'nowrap' }}>45 min</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>330 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>450 €</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}