import s from "./style.module.css"

export function OpenHoursBox({logo, title}) {
    return(
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.logo}>
                    {logo}
                </div>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.recommendation}>
                    Sur rendez-vous uniquement
                </div>
                <div className={s.text}>
                    <p className={s.p}><div className={s.day}>Lundi</div> <div className={s.hours}>14h30 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Mardi</div> <div className={s.hours}> 9h00 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Mercredi</div> <div className={s.hours}>14h30 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Jeudi</div> <div className={s.hours}>9h00 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Vendredi</div> <div className={s.hours}>14h30 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Samedi</div> <div className={s.hours}>9h00 - 19h00</div></p>
                    <p className={s.p}><div className={s.day}>Dimanche</div> <div className={s.hours}>Fermé</div></p>
                </div>
            </div>
        </div>
    )
}