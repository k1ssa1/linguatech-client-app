import { Link } from "react-router";
import logo from "../../../assets/logo_transparent.png";

import styles from "./Footer.module.css";

import {
  FaSquareInstagram,
  FaLinkedin,
  FaFacebook,
  FaSquareTwitter,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.first_row}>
        <section className={styles.img_wrapper}>
          <img src={logo} alt="logo" />
        </section>
        <section className={styles.links_collection}>
          <ul>
            <li>Quick links</li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
          <ul>
            <li>Learning resources</li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Free English Lessons</Link>
            </li>
            <li>
              <Link>Grammar tips</Link>
            </li>
            <li>
              <Link>Pronunciation guide</Link>
            </li>
          </ul>
          <ul>
            <li>Support & Help</li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Privacy policy</Link>
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.lower_section}>
        <ul>
          <li>&copy; 2025 Linguatech. All rights reserved.</li>
        </ul>
        <ul>
          <li>Follow us on</li>
          <li>
            <Link>
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link>
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link>
              <FaSquareInstagram />
            </Link>
          </li>
          <li>
            <Link>
              <FaSquareTwitter />
            </Link>
          </li>
          <li>
            <Link>
              <FaDiscord />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
