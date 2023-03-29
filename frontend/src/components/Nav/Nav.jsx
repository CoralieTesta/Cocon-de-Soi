import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo"
import { MdExpandMore } from "react-icons/md"
import s from "./style.module.css"
import { useState } from "react"

export function Nav() {
    const navigate = useNavigate()
    const [isOpenServices, setIsOpenServices] = useState(false)
    function toggleOpenServices() {
        isOpenServices ? setIsOpenServices(false) : setIsOpenServices(true)
    }

    return(
        <nav className={s.nav}>
                <Logo />
                <div className={s.buttons}>
                    <button 
                        onClick={() => navigate('/')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/"  ? "#376262":"#1F3E3E"}}
                    >
                        Accueil
                    </button>
                    <button 
                        onClick={() => navigate('/apropos')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/apropos"  ? "#376262":"#1F3E3E"}}
                    >
                        À propos
                    </button>
                    <button 
                        onClick={toggleOpenServices} 
                        className={s.btnServices}
                        style={{backgroundColor: 
                            (window.location.pathname==="/massage" ||window.location.pathname==="/dryNeedling"||
                            window.location.pathname==="/cupping"||window.location.pathname==="/douleursChroniques"||
                            window.location.pathname==="/troublesEquilibre"||window.location.pathname==="/formation")
                         ? "#376262":"#1F3E3E"}}
                    >
                        <div className={s.servicesBox}><div className={s.services}>Services</div> <MdExpandMore size={25} className={s.expandIcon} /></div>
                    
                    {isOpenServices &&
                    <div className={s.subButtonsServicesContainer}>
                        <button 
                        onClick={() => navigate('/massage')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/massage" ? "#376262":"#1F3E3E"}}
                        >
                        ***
                        </button>
                        <button 
                            onClick={() => navigate('/dryNeedling')} 
                            className={s.subBtnServices}
                            style={{backgroundColor: window.location.pathname==="/dryNeedling" ? "#376262":"#1F3E3E"}}
                        >
                        ***
                        </button>
                        <button 
                        onClick={() => navigate('/cupping')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/cupping" ? "#376262":"#1F3E3E"}}
                    >
                        ***
                    </button>
                    <button 
                        onClick={() => navigate('/douleursChroniques')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/douleursChroniques" ? "#376262":"#1F3E3E"}}
                    >
                        ***
                    </button>
                    </div>
                    }
                    </button>
                    <button 
                        onClick={() => navigate('/tarifs')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/tarifs" ? "#376262":"#1F3E3E"}}
                    >
                        Tarifs
                    </button>
                    
                    <button 
                        onClick={() => navigate('/contact')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/contact" ? "#376262":"#1F3E3E"}}
                    >
                        Contact
                    </button>
                </div>
        </nav>
    )
}