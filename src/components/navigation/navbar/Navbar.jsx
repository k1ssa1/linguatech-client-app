import { Link } from "react-router";

import logo from "../../../assets/logo_transparent.png";
import styles from "./Navbar.module.css"

import { FaBars, FaEnvelope } from "react-icons/fa6";
import { useState, useEffect} from "react";
import classNames from "classnames";

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIscrolled] = useState(false);

    const dropdownMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIscrolled(true);
            }else{
                setIscrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

  return (
    <nav className={classNames(styles.appbar, {[styles.appbar_anchor]: isScrolled})} id="appBar">
      <div className={classNames(styles.logo_list)}>
          <Link to="/">
            <img src={logo} alt="logo" width={120} />
          </Link>
          <FaBars color="#291488" size={40} className={styles.barIcon} onClick={dropdownMenu}/>
      </div>
      <ul className={classNames(styles.anchorlinks_list, { [styles.show]: isMenuOpen})}>
        <li className={styles.list_item}>
            <Link to="#hero" onClick={(e) => scrollToSection("hero", e)}>home</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#services" onClick={(e) => scrollToSection("services", e)}>services</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#pricing" onClick={(e) => scrollToSection("pricing", e)}>pricing</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#contact" onClick={(e) => scrollToSection("contact", e)}><FaEnvelope size={16}/>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
