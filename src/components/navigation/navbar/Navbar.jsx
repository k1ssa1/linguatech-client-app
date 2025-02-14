import { Link } from "react-router";

import logo from "../../../assets/logo_transparent.png";
import styles from "./Navbar.module.css"

import { FaBars, FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const dropdownMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

  return (
    <nav className={styles.appbar}>
      <div className={classNames(styles.logo_list)}>
          <Link to="/">
            <img src={logo} alt="logo" width={120} />
          </Link>
          <FaBars color="#291488" size={40} className={styles.barIcon} onClick={dropdownMenu}/>
      </div>
      <ul className={classNames(styles.anchorlinks_list, { [styles.show]: isMenuOpen})}>
        <li className={styles.list_item}>
            <Link to="#hero">about</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#services">services</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#pricing">pricing</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#pricing">testimonials</Link>
        </li>
        <li className={styles.list_item}>
            <Link to="#contact"><FaEnvelope size={16}/>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
