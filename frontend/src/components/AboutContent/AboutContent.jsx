import { Article } from "../Article/Article"
import s from "./style.module.css"
import photoProfil from "../../assets/photoProfil.png"
import { Link } from "react-router-dom"

export function AboutContent() {
    const textDescriptionPerrineLacoste =
    <>
        Bonjour, je suis Perrine Lacoste Grotino, <strong>masseuse</strong> spécialisée dans le <strong>massage énergétique</strong>. J'ai créé <strong>Cocon de Soi</strong>, un <strong>salon de massage à Ambérieu-en-Bugey</strong>, afin de répondre à ma vocation : aider les autres à <strong>prendre soin de leur corps et leur esprit</strong>. Cet <strong>espace de détente et de relaxation</strong> a un principe de tarif abordable, issu de l'idée où chaque individu devrait pouvoir <strong>prendre soin de soi régulièrement</strong>. Je pratique le <strong>massage énergétique</strong>, un des concepts de la <strong>médecine traditionnelle chinoise</strong> qui comprend le <strong>QI, l'énergie vitale qui nous compose</strong>. Il peut être <strong>déséquilibré</strong> et/ou <strong>bloqué</strong>, ce qui peut être la cause de certaines maladies. Grâce à ce <strong>massage, le Qi est stimulé et dynamisé</strong>, favorisant ainsi la circulation de son flux dans notre corps. <strong>L'effet est donc à but préventif, non thérapeutique</strong>. Aujourd'hui, je me propose à vous avec cet outil qui <strong>comprend votre corps</strong>, mais aussi avec une forte <strong>volonté d'aider les autres</strong>. J'ai cependant toujours eu <strong>« ces mains qui aident »</strong>… depuis toute petite. 
    </>
    const textArticleMesMains =
        <>
            <p>Tout commence lorsque, étant enfant, mes parents (coiffeur et esthéticienne) me demandent des massages pour les soulager de tensions dues à leurs activités professionnelles. Je laisse mes mains agir naturellement, ils s'en retrouvent instantanément revigorés et dynamisés. Plus tard, ils me sollicitent pour des douleurs plus aigües et en quelques tours de main, ils repartent profondément soulagés. À l'âge adulte, je cesse d'accorder mon savoir-faire. Je développe effectivement un ressenti très poussé qui me fait ressentir leurs propres douleurs lors des massages, me laissant dans beaucoup trop d'inconfort.</p>
            <p>Vers ma quarantième année, je rencontre l'homme qui partage aujourd'hui ma vie. Il m'explique ce que je ressens à travers mes massages et pourquoi. C'est ainsi qu'il m'enseigne les bases du magnétisme. Après cela, je n'ai de cesse de me perfectionner et je développe ce savoir avec de nombreux massages auprès de mes collègues de travail. Je m'intéresse ensuite à la relation entre les douleurs physiques et émotionnelles.</p>
            <p>En 2020, je fais un burn-out au travail (aide à la personne) et je subis quelques mois plus tard une nouvelle opération qui me rend inapte à mon poste. Je suis licenciée en octobre 2022. Cet épisode de ma vie me plonge au plus profond de moi : je me cherche, me pose d'innombrables questions tant au niveau professionnel que personnel. J'ai des envies de compréhension au sujet de diverses techniques de soin et ma curiosité me rapproche de la médecine traditionnelle chinoise. Suite à cela, je m'inscris à une première formation : les principes fondamentaux de la médecine chinoise, le massage Tuina et la manipulation des ventouses et des moxas.
            Dès lors, je sais que je veux apporter à nouveau du bien-être aux personnes. Je poursuis ma formation avec de nouvelles techniques basées sur le bien-être, non le thérapeutique (il est important de le préciser). Je teste ensuite mes acquis sur mon entourage. Les résultats sont là : de profondes détentes, des libérations émotionnelles et une amélioration de la santé. J'en parle à mon médecin qui me soutient et vient même tester un massage… qu'il valide. 
            C'est décidé ! Je crée mon entreprise de massages bien-être à but préventif selon les principes de la médecine traditionnelle chinoise ! 
            Ainsi, le salon de massage Cocon de Soi est né.</p>
        </>
    const textAmberieuEnBugey =
    <>
        <p>
            Venez nombreux, vous serez tous accueillis de la même manière : la porte et les bras grands ouverts ! Si vous êtes d'Ambérieu, c'est parfait, vous connaissez probablement la gare, le salon de massage est juste à côté. Si vous n'êtes pas d'ici, c'est aussi parfait: la gare est juste à côté du salon. Vous trouverez un lien Google Maps dans la page <Link to="/contact" className={s.link}> « contact »</Link>. Si vous êtes de l'Ain, vous savez qu'il ne faut pas longtemps pour venir : dans la plaine de l'Ain, tout est plat, tout est proche.
        </p>
        <p>
            Quarante minutes. C'est le temps qu'il faut pour venir en train de Lyon, en bus de Bourg-en-Bresse (arrêt à la gare) et en voiture de Belley. Lagnieu, Meximieux et Pérouges, témoins de la région naturelle et historique du Bas-Bugey, sont eux à 15 minutes en voiture. Alors si vous êtes venu visiter les environs comme le château des Allymes, le parc splendide du château des Échelles, l'église Saint-Symphorien, le lac bleu, ou la cité de Pérouges, vous avez de quoi faire. Si vous venez pour prendre soin de vous, vous détendre et explorer l'univers du bien-être au travers d'un massage énergétique, vous connaissez l'adresse. Mais après tout, les deux sont possibles. Ce qui est bien, c'est que si vous venez souvent entretenir votre bien-être, vous avez de quoi faire dans les alentours. 
        </p>
        <p>
            Prenez le temps de voir comment Ambérieu-en-Bugey et ses villes voisines préservent leur patrimoine architectural et culturel, observez-vous ensuite de la même manière. Faites-vous l'effort bienveillant de préserver votre corps et votre esprit face au temps qui vous change et vous bouleverse ? Votre enveloppe physique a, comme un bâtiment, besoin d'être entretenue si elle veut faire face au temps. Quant à votre esprit, il a lui besoin d'un corps solide et en bonne santé pour rester intact. 
        </p>
        <p>
            Cocon de Soi est un salon de massage à Ambérieu-en-Bugey où vous vous sentez bien et prenez soin de vous. Mes expériences dans le bien-être et dans l'aide à la personne me permettent aussi de comprendre vos maux et vous accompagner vers un état de relaxation complet. J'aime l'image ou chaque individu explore un relâchement total à l'intérieur de leur cocon de soie afin de devenir un papillon vivant son bien-être au quotidien. Pour ainsi dire, je vous invite à la découverte d'un « moi » intérieur en meilleur état, qui se découvre et s'émerveille. Le massage énergétique fait le reste, le masseur est l'intermédiaire d'un savoir qui connaît votre corps et son fonctionnement, un savoir qui est la clé de la santé au quotidien, la clé du bien-être.
        </p>
    </>
    return(
        <div>
            <Article
                text={textDescriptionPerrineLacoste}
                src={photoProfil}
                textBtn="Contactez-moi"
                bgColor='#F6E9DB'
                link={'/contact'}
            />
            <Article 
                title="Mes mains pour le bien-être des autres" 
                text={textArticleMesMains}
                //src={massage1}
            />
            

            <Article
                title="Un salon de massage à Ambérieu-en-Bugey"
                text={textAmberieuEnBugey}
                bgColor='#F6E9DB'
            />            
        </div>
    )
}