import { useNavigate } from "react-router-dom"
import s from "./style.module.css"

export function Image({src,alt}) {
    const navigate = useNavigate()
    return(
        <div className={s.container}>
            <img className={s.img} src={src} alt={alt}/>
            <hr/>
            <button 
                className={s.btn}
                onClick={() => navigate("/contact")}
            >
                Je suis intéressé !
            </button>
        </div>
    )
}