import { Link } from "react-router-dom"
import { MassageItem } from "../MassageItem/MassageItem"
import { SectionContainer } from "../SectionContainer/SectionContainer"
import s from "./style.module.css"

export function MassageList() {
    const textCocon = 
    <>
        Massage du corps global personnalisé. Il combine différentes techniques pour répondre aux besoins selon votre état physique et psychique. Il <span style={{ whiteSpace: 'nowrap' }}>renforce :</span>
        <ul>
            <li>les défenses <span style={{ whiteSpace: 'nowrap' }}>immunitaires ;</span></li>
            <li>le <span style={{ whiteSpace: 'nowrap' }}>corps ;</span></li>
            <li>l’énergie (fatigue).</li>
        </ul>
    </>

    const textDrainage = 
    <>
        Renforce le système immunitaire, apporte de l’énergie lors d’une période de grosse fatigue et aide à la cicatrisation en post opération. Il stimule aussi le système lymphatique pour les problèmes <span style={{ whiteSpace: 'nowrap' }}>de :</span>
        <ul>
            <li>jambes <span style={{ whiteSpace: 'nowrap' }}>lourdes ;</span></li>
            <li><span style={{ whiteSpace: 'nowrap' }}>digestion ;</span></li>
            <li><span style={{ whiteSpace: 'nowrap' }}>constipation ;</span></li>
            <li><span style={{ whiteSpace: 'nowrap' }}>œdèmes ;</span></li>
            <li>cellulite.</li>
        </ul>
    </>

    const textVisage =
    <>
        Durées <span style={{ whiteSpace: 'nowrap' }}>possibles :</span> 30 et 45 minutes. Basé avant tout sur votre bien-être psychique, il vous guide vers une relaxation totale et porte de multiples bienfaits <span style={{ whiteSpace: 'nowrap' }}>comme :</span>
        <ul>
            <li>rééquilibrer énergétiquement le <span style={{ whiteSpace: 'nowrap' }}>corps ;</span></li>
            <li>relâcher les tensions dues au <span style={{ whiteSpace: 'nowrap' }}>stress ;</span></li>
            <li>Conserver la jeunesse de la peau.</li>
        </ul>
    </>

    const textLiberationEmotionnelle =
    <>
        Le Tuina des émotions. C’est un massage doux et relaxant qui calme et rééquilibre le système émotionnel. Le travail se fait sur les méridiens grâce à l'acupression des points reliés aux émotions. Il <span style={{ whiteSpace: 'nowrap' }}>va :</span>
        <ul>
            <li>calmer les émotions <span style={{ whiteSpace: 'nowrap' }}>négatives ;</span></li>
            <li>apaiser le <span style={{ whiteSpace: 'nowrap' }}>corps ;</span></li>
            <li>enlever le stress.</li>
        </ul>
    </>

    const textEpuisees = 
    <>
        (disponible début Août 2023) Le travail est principalement ciblé sur le dos et les trapèzes afin de favoriser un allègement émotionnel et musculaire. Aide <span style={{ whiteSpace: 'nowrap' }}>aussi :</span>
        <ul>
            <li>au renforcement du système <span style={{ whiteSpace: 'nowrap' }}>immunitaire ;</span></li> 
            <li>au rééquilibrage <span style={{ whiteSpace: 'nowrap' }}>énergétique ;</span></li>
            <li> à la tonification de l'organisme en travaillant sur les méridiens et points d'acupuncture précis.</li>
        </ul>

    </>

    const textPersonnesAgees=
    <>
        Ce massage à l’huile est destiné aux personnes ne pouvant pas s'allonger sur une table de massage. Il apporte la détente, la relaxation, un rééquilibrage énergétique ainsi qu’un allègement des douleurs du corps.<br/>
        Je propose 3 protocoles au choix ou <span style={{ whiteSpace: 'nowrap' }}>simultanés :</span>
        <ul>
            <li>Tête - visage - cou - <span style={{ whiteSpace: 'nowrap' }}>épaules ;</span></li>
            <li><span style={{ whiteSpace: 'nowrap' }}>Dos ;</span></li>
            <li>Pieds.</li>
        </ul>
    </>

    const textVentre=
    <>
        Le Chi Nei Tsang. C’est un massage doux et lent qui apaise le corps et l’esprit. En chinois, Chi Nei Tsang veut dire « travail de l’énergie interne des organes ». Son principal objectif est d’harmoniser les émotions en rétablissant l’équilibre et la circulation de l’énergie qui parcourt notre <span style={{ whiteSpace: 'nowrap' }}>corps :</span> le Qi. Il va <span style={{ whiteSpace: 'nowrap' }}>aussi :</span>
        <ul>
            <li>aider au bon fonctionnement du système <span style={{ whiteSpace: 'nowrap' }}>digestif ;</span></li>
            <li>soulager les maux de <span style={{ whiteSpace: 'nowrap' }}>dos ;</span></li>
            <li>soulager les douleurs abdominales dues au stress.</li>
        </ul>
    </>

    const textLemniscate =
    <>
        (disponible le 15 Septembre 2023) Massage indien qui suit le mouvement naturel des fluides du corps circulants en «8». Mes mains reprennent continuellement ce cycle (symbolisant l’infini) avec une pression très légère. Elle peut être adaptée selon le besoin du corps et la demande du client. Ce <span style={{ whiteSpace: 'nowrap' }}>massage :</span>
        <ul>
            <li>dynamise et harmonise le <span style={{ whiteSpace: 'nowrap' }}>corps ;</span></li>
            <li>relance <span style={{ whiteSpace: 'nowrap' }}>l’autoguérison ;</span></li>
            <li>recentre <span style={{ whiteSpace: 'nowrap' }}>l’esprit ;</span></li>
            <li>apporte du bien-être.</li>
        </ul>
    </>

    const textEnceinte =
    <>
        (disponible début Juin 2023) Massage spécifiquement adapté aux femmes enceintes pour apaiser les tensions physiques et émotionnelles dues à la grossesse. Permet aux futures mamans de mieux vivre cette période évolutive où leur corps et leurs émotions sont constamment en train de changer. Ce massage apporte <span style={{ whiteSpace: 'nowrap' }}>aussi :</span>
        <ul>
            <li>une relaxation <span style={{ whiteSpace: 'nowrap' }}>globale ;</span></li>
            <li>de <span style={{ whiteSpace: 'nowrap' }}>l’énergie ;</span></li>
            <li>un apaisement du stress et de l’anxiété.</li>
        </ul>

    </>

    const textPostGrossesse =
    <>
         (disponible début Août 2023) Massage doux et relaxant, travaille sur zones musculaires et les méridiens par acupression sur des points précis. Renforce le système immunitaire de la jeune maman et tonifie son organisme durement sollicité pendant la grossesse. Aide aussi à la relaxation <span style={{ whiteSpace: 'nowrap' }}>musculaire :</span>
         <ul>
            <li>des <span style={{ whiteSpace: 'nowrap' }}>trapèzes ;</span></li>
            <li>des <span style={{ whiteSpace: 'nowrap' }}>épaules ;</span></li>
            <li>du dos.</li>
        </ul>
    </>

    const textBebe =
    <>
        (Disponible début Juin 2023) Shantala. Massage réalisé <span style={{ whiteSpace: 'nowrap' }}>soit :</span> 
        <ul>
            <li>Par <span style={{ whiteSpace: 'nowrap' }}>vous :</span>  J'apprends aux parents à développer un lien fort avec leur nouveau-né à travers le toucher. </li>  
            <li>Par <span style={{ whiteSpace: 'nowrap' }}>moi-même :</span> Pour les parents peu à l'aise avec le massage.</li>
        </ul>
        Ce que le massage Shantala apporte au <span style={{ whiteSpace: 'nowrap' }}>bébé :</span>  
        <ul>
            <li>la prise de conscience de son corps, de son <span style={{ whiteSpace: 'nowrap' }}>environnement ;</span></li>
            <li>un développement <span style={{ whiteSpace: 'nowrap' }}>épanoui ;</span></li>
            <li>le renfort de son système <span style={{ whiteSpace: 'nowrap' }}>immunitaire ;</span></li>
            <li>l’aide à la maturation de ses différents <span style={{ whiteSpace: 'nowrap' }}>systèmes ;</span></li>
            <li>un sentiment de sécurité.</li>
        </ul>
    </>

    return(
        <SectionContainer>
            <p className={s.p}>Je propose tous les massages <Link to="/tarifs" className={s.link}> au même tarif</Link>, choisissez lequel est adapté à votre besoin. Si vous avez un doute, <Link to="/contact" className={s.link}> je me ferais un plaisir de vous orienter</Link>. 
            </p>
            <p className={s.p}>
                Voici les différents <span style={{ whiteSpace: 'nowrap' }}>massages :</span> 
            </p>
                <div className={s.offers}>
                    <MassageItem 
                        title="Massage Cocon de Soi" 
                        text={textCocon}
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
                        text={textLiberationEmotionnelle}
                    />
                    <MassageItem 
                        title="Massage aux personnes épuisées physiquement ou moralement (burn-out)" 
                        text={textEpuisees}
                    />
                    <MassageItem
                        title="Massage Assis ou personnes âgées"
                        textHTML={textPersonnesAgees}
                    />
                    <MassageItem 
                        title="Massage du Ventre" 
                        text={textVentre}
                    />
                    <MassageItem 
                        title="Le lemniscate" 
                        text={textLemniscate}
                    />
                    <MassageItem 
                        title="Massage Femme Enceinte" 
                        text={textEnceinte}
                    />
                    <MassageItem 
                        title="Massage Post grossesse" 
                        text={textPostGrossesse}
                    />
                    <MassageItem 
                        title="Massage Bébé" 
                        text={textBebe}
                    />
                </div>
            </SectionContainer>
    )
}