import { AiOutlineMail } from "react-icons/ai"
import s from "./style.module.css"

export function Mail() {
    function sendMailHandler() {
        window.open('mailto:perrine.lacoste@hotmail.fr')
    }
    return(
        <div    
            className={s.subcontainer} 
            onClick={sendMailHandler}
        >
            <AiOutlineMail size={19}/>
            <div className={s.data}>
                perrine.lacoste@hotmail.fr
            </div>
        </div>
    )
}