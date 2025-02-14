import ctaImg from "../../assets/hero_section_image.svg";

import styles from "./Hero.module.css";

import { FaRocket } from "react-icons/fa6";

import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ctaTitle= useRef(null);
  const ctaDesc= useRef(null);
  const ctaBtn= useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if(ctaTitle.current){
        anime({
            targets: [ctaTitle.current],
            opacity: [0,1],
            duration: 1000,
            easing: "easeOutQuad"
        });
    }
    if(ctaDesc.current){
        anime({
            targets: [ctaDesc.current],
            opacity: [0,1],
            duration: 1000,
            easing: "easeOutQuad",
            delay: 1000
        })
    }
    if(ctaBtn.current){
        anime({
            targets: [ctaBtn.current],
            opacity: [0,1],
            duration: 1000,
            easing: "easeOutQuad",
            delay: 1500
        })
    }
    if(imgRef.current){
        anime({
            targets: [imgRef.current],
            opacity: [0,1],
            duration: 2500,
            easing: "easeOutQuad",
            delay: 1000
        })
    }
  }, [])

  return (
    <header className={styles.main}>
      <section className={styles.content}>
        <h1 ref={ctaTitle} style={{opacity: 0}}>Unlock fluent English - Learn faster, speak confidently</h1>
        <p ref={ctaDesc} style={{opacity: 0}}>
          Master English with expert-led courses and flexible learning at your
          pace. Join thousands of learners who trus us to guide them to fluency!
        </p>
        <button ref={ctaBtn} style={{opacity: 0}}>
          <FaRocket /> Start your journey
        </button>
      </section>
      <section className={styles.image_container}>
        <img ref={imgRef} src={ctaImg} alt="tutor holding an orange folder" style={{opacity: 0}}/>
      </section>
    </header>
  );
};

export default Hero;
