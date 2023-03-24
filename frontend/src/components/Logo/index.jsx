import s from "./style.module.css";
import logoIcon from "../../assets/logoCoconHeader.png"
import { useNavigate } from "react-router-dom";
export function Logo({ onClick }) {
  const navigate = useNavigate()
  return (
    <div className={s.container} onClick={()=> navigate('/')}>
      <div>
        <img className={s.logoIcon} alt="logo Cocon de Soi" src={logoIcon}/>
      </div>
      <div className={s.name}>
        Cocon de Soi
      </div>
    </div>
  );
}
