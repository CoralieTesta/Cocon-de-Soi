import s from "./style.module.css"

export function MainProposition({title, p1, p2, imgUrl}) {
    return(
        <section 
            style={{
                backgroundImage:`url(${imgUrl})`,
                
            }}
            className={s.section}
        >
            <div className={s.textContainer}>
                <p className={s.h1}>
                    {title}
                </p>
                <p className={s.p}>
                    {p1}
                </p>
                <p className={s.p}>
                    {p2}
                </p>
            </div>
        </section>
    )
}