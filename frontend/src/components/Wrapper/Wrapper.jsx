import s from "./style.module.css"

export function Wrapper({children}) {
    return(
        <div className={s.wrapper}>
            {children}
        </div>
    )
}