import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo"
import { MdExpandMore } from "react-icons/md"
import s from "./style.module.css"
import { useState } from "react"

export function Nav() {
    const navigate = useNavigate()
    const [isOpenPrices, setIsOpenPrices] = useState(false)
    function toggleOpenPrices() {
        isOpenPrices ? setIsOpenPrices(false) : setIsOpenPrices(true)
        console.log("prices",isOpenPrices)
    }

    return(
        <nav className={s.nav}>
                <Logo />
                <div className={s.buttons}>
                    <div 
                        onClick={() => navigate('/')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/"  ? "#376262":"#1F3E3E"}}
                    >
                        Accueil
                    </div>
                    <div 
                        onClick={() => navigate('/apropos')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/apropos"  ? "#376262":"#1F3E3E"}}
                    >
                        À propos
                    </div>
                    <button 
                        onClick={() => navigate('/services')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/services" ? "#376262":"#1F3E3E"}}
                    >
                        Services                    
                    </button>
                    <div 
                        onClick={toggleOpenPrices} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/tarifs" ? "#376262":"#1F3E3E"}}
                    >
                        <div style={{display:'flex'}}><div>Tarifs</div> <MdExpandMore size={25} className={s.expandIcon} /></div>
                    
                    {isOpenPrices &&
                    <div className={s.subButtonsContainer}>
                        <button 
                        onClick={() => navigate('/tarifs')} 
                        className={s.subBtn}
                        style={{backgroundColor: window.location.pathname==="/tarifs" ? "#376262":"#1F3E3E"}}
                        >
                        Tarifs de base + Forfaits
                        </button>
                        <button 
                            onClick={() => navigate('/dryNeedling')} 
                            className={s.subBtn}
                            style={{backgroundColor: window.location.pathname==="/dryNeedling" ? "#376262":"#1F3E3E"}}
                        >
                        Cartes-cadeaux
                        </button>
                    </div>
                    }
                    </div>
                    
                    <div 
                        onClick={() => navigate('/contact')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/contact" ? "#376262":"#1F3E3E"}}
                    >
                        Contact
                    </div>
                </div>
        </nav>
    )
}