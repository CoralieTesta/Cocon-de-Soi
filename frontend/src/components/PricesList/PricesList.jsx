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
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>90 €</span> massage <span style={{ whiteSpace: 'nowrap' }}><span className={s.bold}>1 h 45</span> ;</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>60 €</span> massage <span style={{ whiteSpace: 'nowrap' }}><span className={s.bold}>1 h</span> ;</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>45 €</span> massage sur zone ciblé  <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>45 min</span> de <span style={{ whiteSpace: 'nowrap' }}>massage ;</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>30 €</span>  massage sur zone ciblé  <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>30 min</span> de massage.
                    </li>
                </ul>
                <hr className={s.hr}/>
                <span className={s.title}>Forfaits</span>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>3</strong> massages <span style={{ whiteSpace: 'nowrap' }}>1 h 45</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>255 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>270 € ;</span>
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>5</strong> massages  <span style={{ whiteSpace: 'nowrap' }}>1 h 45</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>415 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>450 € ;</span>
                        </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>10</strong> massages  <span style={{ whiteSpace: 'nowrap' }}>1 h 45</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>800 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>900 € ;</span>
                        </li>
                </ul>
                <ul style={{listStyleType:'none'}}>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>3</strong> massages <span style={{ whiteSpace: 'nowrap' }}>1 h</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>165 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>180 € ;</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>5</strong> massages <span style={{ whiteSpace: 'nowrap' }}>1 h</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>265 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>300 € ;</span>
                    </li>
                    <li className={s.li}>
                        <BsFlower3 className={s.flowerIcon}/>
                        <strong>10</strong> massages  <span style={{ whiteSpace: 'nowrap' }}>1 h</span> = <span className={s.bold} style={{ whiteSpace: 'nowrap' }}>500 €</span> au lieu de <span style={{ whiteSpace: 'nowrap' }}>600 €.</span>
                    </li>
                </ul>
                <hr className={s.hr}/>
                <p className={s.p}>
                    Carte de fidélité non nominative. <br/>
                    Vous pouvez acheter un forfait à plusieurs <br/>
                    (en famille, entre amis, en entreprise…) <br/>
                    et vous partager la carte. 
                </p>
            </div>
        </section>
    )
}