import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Testimonials.module.css";

const testimonyData = [
    {
        quote:
        "This plateform has completely transformed the way I learn English. The interactive approach keeps me engaged and motivated!",
        name: "Sarah L.",
        role: "Sales specialist",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        quote:
        "Thanks for this ourse, I feel confident communicating in English at work. The structured lessons made all the difference.",
        name: "Ahmed R.",
        role: "Software engineer",
        image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        quote:
        "A fantastic learning experience! This plateform is very intuitive, and the lessons are tailored to real life conversations.",
        name: "Lisa L.",
        role: "Business consultant",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        quote:
        "I was struggling with English fluency, but this course gave me the tools to improve quickly. Highly recommended!",
        name: "Diego K.",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        quote:
        "I love the flexibility of learning at my own pace. The progress tracking feature is really helpful! ",
        name: "Emily T.",
        role: "HR manager",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        quote:
        "The best online language course I've taken. The interactive exercices are game changers!",
        name: "Carlos D.",
        role: "Data analyst",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
]

const Testimonials = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_header}>
        <h2>Testimonials -Transfroming language learning</h2>
        <p>
          Discover how our innovative language courses have empowered
          professionals and individuals worldwide.
        </p>
      </div>
      <div className={styles.swipper_wrapper}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 3 },
            480: { slidesPerView: 1 },
          }}
        >
          {testimonyData.map((testimonial, index) => (
            <SwiperSlide key={index}>
                <div className={styles.card}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.card_img} />
                    <p className={styles.quote}>{testimonial.quote}</p>
                    <h4 className={styles.name}>{testimonial.name}</h4>
                    <p className={styles.role}>{testimonial.role}</p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
