import { useState, useRef, useEffect  } from "react";
import styles from "./Pricing.module.css"

import { FaCircleCheck  } from "react-icons/fa6";
import anime from "animejs/lib/anime.es.js";

const Pricing = () => {

    const [isMonthly, setMonthly] = useState(true);
    const [isAnnual, setAnnual] = useState(false);

    const pricingRef = useRef(null);
    const hasAnimated = useRef(false);

    const pricingTitle = useRef(null);
    const pricingSubtitle = useRef(null);
    const pricingDesc = useRef(null);
    const pricingToggle = useRef(null);

    const monthlyPrices = {
        bronze: 19.19,
        silver: 39.99,
        gold: 69.99
    }

    const annualPrices = {
        bronze: 189.99,
        silver: 389.99,
        gold: 689.99
    }

    const handleToggle = (plan) => {
        if(plan === "monthly"){
            setMonthly(true);
            setAnnual(false);
        }else{
            setMonthly(false);
            setAnnual(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
    
              anime({
                targets: `.${styles.card}`,
                opacity: [0,1],
                duration: 2000,
                easing: "easeOutQuad",
                delay: anime.stagger(1500)
              })

              anime({
                targets: [pricingTitle.current, pricingSubtitle.current, pricingDesc.current, pricingToggle.current],
                opacity: [0,1],
                duration: 1000,
                easing: "easeOutQuad",
                delay: anime.stagger(1000)
              })

            }
          },
          {threshold: 0.3}
        );
    
        if(pricingRef.current){
            observer.observe(pricingRef.current);
        }
    
        return () => observer.disconnect();
     }, [])

    return ( 
        <section ref={pricingRef} className={styles.main} id="pricing">
            <div className={styles.header}>
                <h2 ref={pricingTitle} style={{opacity: 0}}>Our pricing</h2>
                <h3 ref={pricingSubtitle} style={{opacity: 0}}>Start your language journey today!</h3>
                <p ref={pricingDesc} style={{opacity: 0}}>Find the perfect plan to fit your goals and unlock new opportunities with expert led-courses.</p>
                <div ref={pricingToggle} className={styles.btn_group} style={{opacity: 0}}>
                    <button className={isMonthly ? styles.active: styles.inactive} onClick={() => handleToggle("monthly")}>Monthly</button>
                    <button className={isAnnual ? styles.active: styles.inactive} onClick={() => handleToggle("annual")}>Annual</button>
                </div>
            </div>
            <div className={styles.card_collection}>
                <div className={styles.card} style={{opacity: 0}}>
                    <div className={styles.card_head}>
                        <h3>Bronze</h3>
                        <p>${isMonthly ? monthlyPrices.bronze : annualPrices.bronze} / {""} {isMonthly ? "Month" : "Year"}</p>
                    </div>
                    <div className={styles.card_body}>
                        <h4>Basic plan</h4>
                        <ul>
                            <li><FaCircleCheck />Access to beginner-level courses</li>
                            <li><FaCircleCheck />1 session per week</li>
                            <li><FaCircleCheck />Email support</li>
                            <li><FaCircleCheck />24/7 access to learning materials</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card} style={{opacity: 0}}>
                    <div className={styles.card_head}>
                        <h3>Silver</h3>
                        <p>${isMonthly ? monthlyPrices.silver : annualPrices.silver} / {""} {isMonthly ? "Month" : "Year"}</p>
                    </div>
                    <div className={styles.card_body}>
                        <h4>Standard plan</h4>
                        <ul>
                        <li><FaCircleCheck />Access to beginner and intermediate-level courses</li>
                        <li><FaCircleCheck />3 sessions per week</li>
                        <li><FaCircleCheck />Email and live chat support</li>
                        <li><FaCircleCheck />24/7 access to learning materials</li>
                        <li><FaCircleCheck />Progress tracking & assessments</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card} style={{opacity: 0}}>
                    <div className={styles.card_head}>
                        <h3>Gold</h3>
                        <p>${isMonthly ? monthlyPrices.gold : annualPrices.gold} / {""} {isMonthly ? "Month" : "Year"}</p>
                    </div>
                    <div className={styles.card_body}>
                        <h4>Premium plan</h4>
                        <ul>
                        <li><FaCircleCheck />Access to all course levels</li>
                        <li><FaCircleCheck />Unlimited sessions per week</li>
                        <li><FaCircleCheck />Priority email & live chat support</li>
                        <li><FaCircleCheck />24/7 access to learning materials</li>
                        <li><FaCircleCheck />Personalized progress tracking & coaching</li>
                        <li><FaCircleCheck />Exclusive content and bonus resources</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Pricing;