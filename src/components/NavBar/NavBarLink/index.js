import { NavLink } from "react-router-dom";
import styles from "./NavBarLink.module.css";

export default function NavBarLink({to, children}){
    return (
        <NavLink to={to} className={({isActive, isPending}) => isActive ? `${styles.navLink} ${styles.selected}` : `${styles.navLink}`}>
            {children}
        </NavLink>
    )
}