import s from "./style.module.css"

export function ContactBoxBComplement({logo, title, text, action, fontSize}) {
    return(
        <div className={s.container} onClick={action}>
            <div className={s.logo}>
                {logo}
            </div>
            <div className={s.title}>
                {title}
            </div>
            <div className={s.text}>
                {text}
            </div>
        </div>
    )
}