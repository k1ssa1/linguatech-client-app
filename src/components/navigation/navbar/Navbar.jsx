import { Link } from "react-router";

import logo from "../../../assets/logo_transparent.png";
import styles from "./Navbar.module.css"

import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className={styles.appbar}>
      <div className={styles.logo_list}>
          <Link to="/">
            <img src={logo} alt="logo" width={120} />
          </Link>
          <FaBars color="#291488" size={40} className={styles.hamburger}/>
      </div>
      <ul className={styles.anchorlinks_list}>
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
            <Link to="#contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
