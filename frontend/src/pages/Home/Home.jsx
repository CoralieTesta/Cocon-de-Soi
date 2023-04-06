
import massageImage from "../../assets/massage_vertical2.jpg"
import { MainProposition} from "../../components/MainProposition/MainProposition";
import DocumentMeta from 'react-document-meta';
import { HomeContent } from "../../components/HomeContent/HomeContent";


export function Home() {
    const meta = {
        title: 'Massage Bien-Être - Cocon de Soi',
        description: 'Bienvenue dans l’espace internet du salon de massage bien-être : Cocon de Soi. Chaque massage est adapté à un besoin particulier, vous trouverez forcément le vôtre.',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'massage, bien-être'
            }
        }}
    return(
        <div style={{
            position: "relative",
            backgroundColor: '#F6E9DB',
            }}
        >
            <MainProposition
                title="Cocon de Soi"
                p1="Massage Bien-Être"
                p2="Energie et Magnétisme"
                imgUrl= {massageImage}
            />
            <DocumentMeta {...meta}>
                <HomeContent/>
            </DocumentMeta>
        </div>
    )
}