
import s from "./style.module.css"

export function MassageItem({title, text, textHTML}) {
    return(
        <article className={s.container}>
            <div className={s.title}>{title}</div>
            <p className={s.text}>
                {text}
            </p>
            <p className={s.text}>
                {textHTML}
            </p>
        </article>
    )
}