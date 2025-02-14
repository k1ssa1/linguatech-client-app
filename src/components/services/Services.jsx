import styles from "./Services.module.css";

import firstService from "../../assets/first_service.svg";
import secondService from "../../assets/second_service.svg";
import thirdService from "../../assets/third_service.svg";
import fourthService from "../../assets/fourth_service.svg";
import fifthService from "../../assets/fifth_service.svg";
import sixthService from "../../assets/sixth_service.svg";
import { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Services = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const desceRef = useRef(null);

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
            delay: anime.stagger(500)
          })

          anime({
            targets: [titleRef.current, subtitleRef.current, desceRef.current],
            opacity: [0,1],
            duration: 1500,
            easing: "easeOutQuad",
            delay: anime.stagger(1000)
          })
        }
      },
      {threshold: 0.3}
    );

    if(sectionRef.current){
        observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
 }, [])

  return (
    <section ref={sectionRef} className={styles.main}>
      <div className={styles.header}>
        <h2 ref={titleRef} style={{opacity: 0}}>Why choose us ?</h2>
        <h3 ref={subtitleRef} style={{opacity: 0}}>Explore our language learning services</h3>
        <p ref={desceRef} style={{opacity: 0}}>
          Discover top-related English courses, personalized tutoring, and
          interactive tools to improve your English speaking, grammar, and
          vocabulary skills.
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={firstService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Tailored courses for you</h4>
            <p>
              Our expert instructors tailor lesson plans based on your learning
              goals, ensuring you progress at your own space.
            </p>
          </div>
        </div>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={secondService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Learn anytime, anywhere</h4>
            <p>
              With flexible class schedules, you can fit language learning into
              your busy days. You can choose the time that&apos;s best for you.
            </p>
          </div>
        </div>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={thirdService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Engaging & Interactive tools</h4>
            <p>
              We propose cutting-edge tools such as quizes, and live exercies to
              make learning engaging and effective for all levels.
            </p>
          </div>
        </div>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={fourthService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Learn from native speakers</h4>
            <p>
              Practice with native speakers to perfect your pronunciation and
              gain a deeper understanding of the culture behind the language.
            </p>
          </div>
        </div>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={fifthService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Choose your learning style</h4>
            <p>
              We offer both private lessons and group classes to suit your
              needs. You can either select group interactions or one-on-one
              focus.
            </p>
          </div>
        </div>
        <div className={styles.card} style={{opacity: 0}}>
          <div className={styles.card_head}>
            <img src={sixthService} width={150} />
          </div>
          <div className={styles.card_body}>
            <h4>Track your progress</h4>
            <p>
              Regular progress assements and detailed feedback help you track
              your improvement and stay motivated throughout your learning
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
