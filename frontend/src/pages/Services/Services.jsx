import DocumentMeta from "react-document-meta"
import { Proposition } from "../../components/Proposition/Proposition"
import { ServicesContent } from "../../components/ServicesContent/ServicesContent"
import massageImage from "../../assets/massage.jpg"
import { Banner } from "../../components/Banner/Banner";
import contact from "../../assets/calendar.jpg"

export function Services() {
    const meta = {
        title: 'Les Différents Types de Massages | Cocon de Soi',
        description: 'Tous les différents types de massages bien-être proposés par le salon Cocon de Soi sont inscrits sur cette page. Vous trouverez certainement votre bonheur.',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'types, massages, bien-être'
            }
        }}
    return(
        <div style={{position: "relative",}}>
            <DocumentMeta {...meta}>
                <Proposition
                    title="Les différents types de massages que je vous propose"
                    p1="*** SEULEMENT SUR RENDEZ-VOUS ***"
                    imgUrl= {massageImage}
                    height='550px'
                />
                <ServicesContent/>
                <Banner
                imgUrl={contact}
                pText="Vous souhaitez une séance ?"
                btnText="Je veux prendre rendez-vous !"
                link="/contact"
                width="100%"
                borderRadius="0px"
                />
            </DocumentMeta>

        </div>
    )
}