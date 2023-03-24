
import massageImage from "../../assets/massage_vertical2.jpg"
import { MainProposition} from "../../components/MainProposition/MainProposition";


export function Home() {
    return(
        <div style={{
            position: "relative",
            backgroundColor: '#F6E9DB'
            }}
        >
            <MainProposition
                title="Cocon de Soi"
                p1="Massage Bien-Être"
                p2="Energie et Magnétisme"
                imgUrl= {massageImage}
            />
            <div style={{height:"500px"}}>

            </div>
        </div>
    )
}