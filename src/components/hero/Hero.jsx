import ctaImg from "../../assets/hero_section_image.svg"

import styles from "./Hero.module.css"

import { FaRocket } from "react-icons/fa6";

const Hero = () => {
  return (
    <header className={styles.main}>
      <section className={styles.content}>
        <h1>Unlock fluent English - Learn faster, speak confidently</h1>
        <p>
          Master English with expert-led courses and flexible learning at your
          pace. Join thousands of learners who trus us to guide them to fluency!
        </p>
        <button><FaRocket/> Start your journey</button>
      </section>
      <section className={styles.image_container}>
        <img src={ctaImg} alt="tutor holding an orange folder"/>
      </section>
    </header>
  );
};

export default Hero;
