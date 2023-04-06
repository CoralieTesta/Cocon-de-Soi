import { MassageList } from "../MassageList/MassageList";
import s from "./style.module.css"

export function ServicesContent() {
    return(
        <div className={s.wrapper}>
            <MassageList/>
        </div>
    )
}