import { Wrapper } from "../Wrapper/Wrapper"
import s from "./style.module.css"
import { GiStoneStack } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import contact from "../../assets/contact1.jpg"

export function HomeContent() {
    return(
        <Wrapper>
            <h1 className={s.h1}>
                Bienvenue chez Cocon de Soi : le salon de massage bien-être
            </h1>
            <div className={s.text}>
                <p className={s.p}>
                    Je suis Perrine, passionnée par l’équilibre et l’entraide. Vous trouverez sur ce site les <Link to="/services" className={s.link}> prestations de massages énergétiques bien-être, chinois et autres</Link> que je propose pour tous. Les femmes enceintes, les personnes âgées et les nourrissons ont eux aussi ma porte grande ouverte. 
                </p>
                <p className={s.p}>
                    Formée continuellement dans le domaine du bien-être, je répondrai naturellement à votre demande de relaxation et serai à votre écoute. Mon objectif ? Le même que le vôtre en venant sur ce site : prendre soin de vous. 
                </p>

                <h2>Le massage bien-être chinois</h2>

                <p className={s.p}>
                    La médecine traditionnelle chinoise existe depuis des milliers d’années. Elle représente des connaissances accumulées, transmises et pratiquées depuis plusieurs générations. Ainsi, elle a fait le tour du monde et ses preuves sur la santé du corps et de l’esprit. Les connaissances liées à cette médecine sont réparties en 5 <span style={{ whiteSpace: 'nowrap' }}>branches :</span> 
                    <ul className={s.ul}>
                        <li><GiStoneStack/>le Chi <span style={{ whiteSpace: 'nowrap' }}>Kong ;</span></li>
                        <li><GiStoneStack/>la <span style={{ whiteSpace: 'nowrap' }}>diététique ;</span></li>
                        <li><GiStoneStack/><span style={{ whiteSpace: 'nowrap' }}>l’acupuncture ;</span></li>
                        <li><GiStoneStack/>la <span style={{ whiteSpace: 'nowrap' }}>pharmacopée ;</span></li>
                        <li><GiStoneStack/>le massage Tuina, divisé en deux <span style={{ whiteSpace: 'nowrap' }}>pratiques :</span></li>
                    <ul className={s.ul}>
                        <li><RxDotFilled/>le massage <span style={{ whiteSpace: 'nowrap' }}>thérapeutique ;</span></li>
                        <li><RxDotFilled/>le massage de confort.</li>
                    </ul>
                    </ul>
                </p>
                <p className={s.p}>
                    Je pratique le massage de confort dans la branche du Tuina. Il tient ses bienfaits sur la santé dans une mesure préventive et agit autant sur le bien-être physique que psychique. Je me ferai un plaisir d’échanger avec vous sur le sujet.
                    <div className={s.banner}>
                    <Banner
                    imgUrl={contact}
                    pText="Vous souhaitez avoir des informations supplémentaires ?"
                    btnText="Oui, je souhaite en savoir plus !"
                    link="/contact"
                    />
                    </div>
                </p>

                <h2>Autres massages et localisation du salon</h2>

                <p className={s.p}>
                    Afin de répondre à toutes vos attentes, je pratique aussi des massages énergétiques basés sur d’autres compétences. Le point commun entre toutes mes prestations est la prise en compte de l’être dans sa <span style={{ whiteSpace: 'nowrap' }}>globalité :</span> le corps, l’âme et l'esprit. 
                </p>
                <p className={s.p}>
                    Le prix ? <Link to="/tarifs" className={s.link}> Il est très accessible</Link>. Je fais d’abord le souhait que tout le monde puisse prendre soin de soi au travers d’un massage complet à un tarif abordable. Le soulagement, la détente et la sérénité au quotidien devraient être à la portée de tous. 
                </p>
                <p className={s.p}>
                    Le salon se situe sur Ambérieu-en-Bugey, proche de la gare. Vous avez ainsi accès à un massage bien-être proche de chez vous et accessible facilement par voie ferrée, à 7 minutes de Meximieux et 40 minutes de Lyon. La gare est aussi desservie par bus pour un trajet d’environ 40 minutes en partant de Bourg-en-Bresse. 
                </p>
                <p className={s.p}>
                    Vous n’avez maintenant plus d'excuses pour prendre soin de vous ! 
                </p>
                <p>
                    Au plaisir de vous rencontrer,
                </p>
                <p className={s.p}>
                    Perrine.
                </p>
            </div>
        </Wrapper>
    )
}