import { AiOutlineMail } from "react-icons/ai"
import s from "./style.module.css"

export function Mail() {
    function sendMailHandler() {
        window.open('mailto:perrinecocondesoi@gmail.com')
    }
    return(
        <div    
            className={s.subcontainer} 
            onClick={sendMailHandler}
        >
            <AiOutlineMail size={19}/>
            <div className={s.data}>
                perrinecocondesoi@gmail.com
            </div>
        </div>
    )
}