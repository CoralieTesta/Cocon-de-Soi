import imageBonCadeau from "../../assets/bonCadeau.png"
import { Proposition } from "../../components/Proposition/Proposition"
import cadeauxImage from "../../assets/cadeaux2.jpg"
import { GiftCardImage } from "../../components/GiftCardImage/GiftCardImage"
import { GiftCardText } from "../../components/GiftCardText/GiftCardText"

export function GiftCard() {
    const meta = {
        title: 'Offrir un Massage Bien-Être',
        description: 'Vous souhaitez offrir un massage bien-être ou vous avez reçu un Bon Cadeau ? Laissez vous guider sur cette page, vous êtes les bienvenus chez Cocon de Soi.',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'massage, bien-être, offrir, bon cadeau'
            }
        }}
    return(
        <div style={{backgroundColor: '#F6E9DB'}}>
            <Proposition
                title="Pour le plaisir d'offrir le bien-être"
                imgUrl={cadeauxImage}
            />
            <GiftCardText/>
            <GiftCardImage src={imageBonCadeau}/>
        </div>
    )
}