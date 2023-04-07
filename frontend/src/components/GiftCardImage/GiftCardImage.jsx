import s from "./style.module.css"

export function GiftCardImage({src}) {
    return(
        <section className={s.section}>
            <img className={s.img} src={src} alt="bon cadeau"/>
        </section>
    )
}