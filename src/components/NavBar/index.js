import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";

export default function NavBar(){
    return (
        <div className={styles.navigation}>
            <NavBarLink to={"/"}>Home</NavBarLink>
            <NavBarLink to={"/aboutme"}>About Me</NavBarLink>
            <NavBarLink to={"/projects"}>Projects</NavBarLink>
        </div>
    )
}