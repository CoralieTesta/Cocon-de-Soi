import imageBonCadeau from "../../assets/bonCadeau.png"
import { Proposition } from "../../components/Proposition/Proposition"
import cadeauxImage from "../../assets/cadeaux2.jpg"
import { GiftCardImage } from "../../components/GiftCardImage/GiftCardImage"
import { GiftCardText } from "../../components/GiftCardText/GiftCardText"

export function GiftCard() {
    return(
        <div style={{backgroundColor: '#F6E9DB'}}>
            <Proposition
                title="Bon cadeau massage"
                imgUrl={cadeauxImage}
            />
            <GiftCardText/>
            <GiftCardImage src={imageBonCadeau}/>
        </div>
    )
}