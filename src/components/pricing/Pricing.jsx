import { useState } from "react";
import styles from "./Pricing.module.css"

import { FaCircleCheck  } from "react-icons/fa6";



const Pricing = () => {

    const [isMonthly, setMonthly] = useState(true);
    const [isAnnual, setAnnual] = useState(false);


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

    return ( 
        <section className={styles.main}>
            <div className={styles.header}>
                <h2>Our pricing</h2>
                <h3>Start your language journey today!</h3>
                <p>Find the perfect plan to fit your goals and unlock new opportunities with expert led-courses.</p>
                <div className={styles.btn_group}>
                    <button className={isMonthly ? styles.active: styles.inactive} onClick={() => handleToggle("monthly")}>Monthly</button>
                    <button className={isAnnual ? styles.active: styles.inactive} onClick={() => handleToggle("annual")}>Annual</button>
                </div>
            </div>
            <div className={styles.card_collection}>
                <div className={styles.card}>
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
                <div className={styles.card}>
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
                <div className={styles.card}>
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