import { ContactBoxListB } from "../../components/ContactBoxListB/ContactBoxListB";
import contact from "../../assets/contact.jpg"
import { Proposition } from "../../components/Proposition/Proposition";

export function Contact() {
    
    return(
        <div style={{backgroundColor: '#F6E9DB'}}>
            <Proposition
                title="Contactez-moi"
                p1="Sur RDV"
                imgUrl={contact}
            />
            <ContactBoxListB />
        </div>
    )
}