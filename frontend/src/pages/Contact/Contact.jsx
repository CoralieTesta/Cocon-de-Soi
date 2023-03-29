import { ContactBoxListB } from "../../components/ContactBoxListB/ContactBoxListB";
import contact from "../../assets/contact.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { OpenHoursBox } from "../../components/OpenHoursBox/OpenHoursBox";
import { AiOutlineClockCircle } from "react-icons/ai";

export function Contact() {
    
    return(
        <div style={{backgroundColor: '#F6E9DB'}}>
            <Proposition
                title="Contactez-moi"
                imgUrl={contact}
            />
            <ContactBoxListB />
            <OpenHoursBox 
                logo={<AiOutlineClockCircle size={50}/>}
                title="Horaire" 
            />
        </div>
    )
}