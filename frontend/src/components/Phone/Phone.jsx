import { BsTelephone } from "react-icons/bs"
import s from "./style.module.css"
import {Linking} from 'react-native';

export function Phone() {
    function callHandler() {
        Linking.openURL(`tel:0684591298`)
    }
    return(
        <div className={s.subcontainer} onClick={callHandler}>
                <BsTelephone size={19}/>
                <div className={s.data}>
                    06.84.59.12.98
                </div>
        </div>
    )
}
