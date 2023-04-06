import { Link } from "react-router-dom"
import { MassageItem } from "../MassageItem/MassageItem"
import { SectionContainer } from "../SectionContainer/SectionContainer"
import s from "./style.module.css"

export function MassageList() {
    const textDrainage = 
    <>
        Renforce le système immunitaire, apporte de l’énergie lors d’une période de grosse fatigue et aide à la cicatrisation en post opération. Il stimule aussi le système lymphatique pour les problèmes de:
        <ul>
            <li>jambes lourdes ;</li>
            <li>digestion ;</li>
            <li>constipation ;</li>
            <li>œdèmes ;</li>
            <li>cellulite.</li>
        </ul>
    </>

    const textVisage =
    <>
        Durées possibles : 30 et 45 minutes. Basé avant tout sur votre bien-être psychique, il vous guide vers une relaxation totale et porte de multiples bienfaits comme :
        <ul>
            <li>rééquilibrer énergétiquement le corps ;</li>
            <li>relâcher les tensions dues au stress ;</li>
            <li>Conserver la jeunesse de la peau.</li>
        </ul>
    </>

    const textPersonnesAgees=
    <>
        Destiné aux personnes âgées ne pouvant plus aller dans un salon de massage parce qu’elles demandent une manipulation très douce. Apporte la détente, la relaxation, un rééquilibrage énergétique ainsi qu’un allègement des douleurs du corps. Le massage dure environ 30 minutes, le client est ainsi dans une situation de confort tout au long de sa visite. 
        Voici les trois types de massages. Au choix, selon le besoin:
        <ul>
            <li>Tête et épaules (massage principalement énergétique) ;</li>
            <li>Dos (massage principalement musculaire) ;</li>
            <li>Pieds (massage de réflexologie, principalement énergétique).</li>
        </ul>
    </>

    return(
        <SectionContainer>
            <p className={s.p}>Je propose tous les massages <Link to="/tarifs" className={s.link}> au même tarif</Link>, choisissez lequel est adapté à votre besoin. Si vous avez un doute, <Link to="/contact" className={s.link}> je me ferais un plaisir de vous orienter</Link>. 
            </p>
            <p className={s.p}>
                Voici les différents massages : 
            </p>
                <div className={s.offers}>
                    <MassageItem 
                        title="Massage Corps Global Personnalisé" 
                        text="Combine différentes techniques pour répondre aux besoins selon votre état physique et psychique."
                    />
                    <MassageItem 
                        title="Massage Drainage Lymphatique" 
                        textHTML={textDrainage}
                    />
                    <MassageItem 
                        title="Massage Tête, Visage, Cou & Épaules" 
                        textHTML={textVisage}
                    />
                    <MassageItem 
                        title="Massage de libération émotionnelle" 
                        text=" Le Tuina des émotions. C'est un massage doux et relaxant qui calme et rééquilibre le système émotionnel. Le travail se fait sur les méridiens grâce à l'acupression des points reliés aux émotions."
                    />
                    <MassageItem 
                        title="Massage aux personnes épuisées physiquement ou moralement" 
                        text="(burn-out) : Renforcement du système immunitaire, rééquilibrage énergétique et tonification de l'organisme en travaillant sur les méridiens et points d'acupuncture précis."
                    />
                    <MassageItem
                        title="Massage Personnes âgées"
                        textHTML={textPersonnesAgees}
                    />
                    <MassageItem 
                        title="Massage du Ventre" 
                        text="Le Chi Nei Tsang. C’est un massage doux et lent qui apaise le corps et l’esprit. Il aide au bon fonctionnement du système digestif, à soulager les maux de dos et les douleurs abdominales dues au stress. Chi Nei Tsang en chinois veut dire « travail de l’énergie interne des organes ». Son principal objectif est d’harmoniser nos émotions en rétablissant l’équilibre et la circulation de l’énergie qui parcourt notre corps : le Qi."
                    />
                    <MassageItem 
                        title="Massage Femme Enceinte" 
                        text="(disponible début Juin 2023) Massage spécifiquement adapté aux femmes enceintes pour apaiser les tensions physiques et émotionnelles dues à la grossesse. Permet aux futures mamans de mieux vivre cette période évolutive où leur corps et leurs émotions sont constamment en train de changer."
                    />
                    <MassageItem 
                        title="Massage Post grossesse" 
                        text="(disponible début Août 2023) Massage doux et relaxant, travaille sur zones musculaires et les méridiens par acupression sur des points précis. Renforce le système immunitaire de la jeune maman et tonifie son organisme durement sollicité pendant la grossesse."
                    />
                    <MassageItem 
                        title="Massage Bébé" 
                        text="(disponible début Juin 2023) Shantala. J'apprends aux parents à développer un lien fort avec leur nouveau-né à travers le toucher (ce sens est le plus développé chez le nourrisson). Cela l’aide à prendre conscience de son corps, de son environnement et lui permet un développement épanoui."
                    />
                </div>
            </SectionContainer>
    )
}