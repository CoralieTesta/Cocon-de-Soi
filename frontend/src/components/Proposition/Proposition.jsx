import s from "./style.module.css"

export function Proposition({title, p1, p2, p3, p4, p5, imgUrl, height}) {
    return(
        <section 
            style={{
                backgroundImage:`url(${imgUrl})`,
                width:'100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height:`${height}`
            }}
        >
            <div className={s.content}>
                <div className={s.textContainer}>
                    <h1 className={s.h1}>
                        {title}
                    </h1>
                    <p className={s.p}>
                        {p1}
                    </p>
                    <p className={s.p}>
                        {p2}
                    </p>
                    <p className={s.p}>
                        {p3}
                    </p>
                    <p className={s.p}>
                        {p4}
                    </p>
                </div>
            </div>
        </section>
    )
}