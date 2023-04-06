import { Proposition } from "../../components/Proposition/Proposition";
import orchidee from "../../assets/orchidee1.jpg"
import { PricesList } from "../../components/PricesList/PricesList";
import bouddhaImage from "../../assets/bouddha2.jpg"
import { Image } from "../../components/Image/Image";

export function Prices() {
    return(
        <div style={{
            backgroundColor: '#F6E9DB'
            }}>
            <Proposition
                title="Tarifs"
                //p1="Sur RDV"
                imgUrl={orchidee}
            />
            <PricesList/>
            <Image src={bouddhaImage} alt="bouddha"/>
        </div>
    )
}