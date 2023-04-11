
import pierresImage from "../../assets/pierres.jpg"
import DocumentMeta from 'react-document-meta';
import { Proposition } from '../../components/Proposition/Proposition';
import { AboutContent } from "../../components/AboutContent/AboutContent";
import { Banner } from "../../components/Banner/Banner";
import contact from "../../assets/contact4.jpg"

export function About() {
    const meta = {
        title: 'Cocon De Soi | Salon de Massage à Ambérieu-en-Bugey',
        description: 'Découvrez Cocon de Soi, un salon de massage à Ambérieu-en-Bugey ainsi que l’histoire de sa créatrice. ',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'massage, Ambérieu-en-Bugey'
            }
        }}
    return(
        <div style={{position: "relative",}}>
            <DocumentMeta {...meta}>
                <Proposition
                    title="Découvrez mon salon de massage à Ambérieu-en-Bugey et qui je suis"
                    imgUrl= {pierresImage}
                />
                <AboutContent/>
                <Banner
                imgUrl={contact}
                pText="Vous souhaitez avoir des informations supplémentaires ?"
                btnText="Oui, je souhaite en savoir plus !"
                link="/contact"
                width="100%"
                borderRadius="0px"
                />
            </DocumentMeta>
        </div>
    )
}