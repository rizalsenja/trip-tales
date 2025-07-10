import { useRef } from "react";
import styles from "./About.module.scss";
import Button from "../../ui/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { iconLike } from '../../../assets/img/about'


// Define the type
type Testimonial = {
    name: string;
    countryCode: string;
    location: string;
    reviews: string;
    initials: string;
    likes: number;
    title: string;
    content: string;
    date: string;
    rating: string;
};

// Data
const testimonials: Testimonial[] = [
    {
        name: "Amanda Geraldine",
        countryCode: "us",
        location: "San Francisco, CA",
        reviews: "2 Reviews",
        initials: "AS",
        likes: 4,
        title: "Planning my dream vacation was never this easy!",
        content:
            "I was overwhelmed trying to compare flight prices and hotel options across different websites. Then I found this online travel agent platform—and it changed everything. Within minutes, I had my entire itinerary booked: flights, hotel, and even a rental car, all at great prices. The interface was super intuitive, and I loved how it suggested hidden gems I wouldn’t have found on my own",
        date: "May 15, 2025",
        rating: "5.0/5",
    },
    {
        name: "Junior Brandao",
        countryCode: "nl",
        location: "Amsterdam",
        reviews: "5 Reviews",
        initials: "JB",
        likes: 42,
        title: "Best travel decision I’ve ever made!",
        content:
            "his platform took the stress out of vacation planning. Everything was so organized—from booking flights to hotel check-in. I even got travel tips based on my destination!",
        date: "May 22, 2025",
        rating: "5.0/5",
    },
    {
        name: "Alexander Lacazette",
        countryCode: "gb",
        location: "Birmingham, UK",
        reviews: "5 Reviews",
        initials: "AL",
        likes: 8,
        title: "Smooth, simple, and affordable.",
        content:
            "“I managed to book a last-minute business trip without paying premium rates. The app found me great deals and let me manage everything from one place.”",
        date: "May 22, 2025",
        rating: "5.0/5",
    },
];

export default function About() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className={styles.about}>
            <Button label="Testimonials" size="xl" variant="outline" color="primary" />
            <h2 className={styles.about__title}>What People say about TripTales</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                onInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1.2, 
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 2.5,
                      spaceBetween: 32,
                    },
                    1280: {
                      slidesPerView: 2.9,
                      spaceBetween: 36,
                    },
                  }}
                  
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.about__card}>
                            <div className={styles.about__header}>
                                <div className={styles.about__avatar}>{item.initials}</div>
                                <div className={styles.about__info}>
                                    <div className={styles.about__name}>
                                        {item.name}
                                        <img
                                            src={`https://flagcdn.com/h20/${item.countryCode}.png`}
                                            alt={`Flag of ${item.countryCode}`}
                                            className={styles.about__flag}
                                        />
                                    </div>
                                    <div className={styles.about__meta}>
                                        {item.location} • {item.reviews}
                                    </div>
                                </div>
                                <div className={styles.about__actions}>
                                    <img
                                        src={iconLike}
                                        alt="Like icon"
                                        className={styles.about__likeIcon}
                                    />
                                    <span>{item.likes}</span>
                                    <span>•••</span>
                                </div>
                            </div>
                            <div className={styles.about__body}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                            <div className={styles.about__footer}>
                                <span>Written {item.date}</span>
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className={styles.about__nav}>
                    <button
                        ref={prevRef}
                        className={`${styles.about__navBtn} ${styles["about__navBtn--prev"]}`}
                    >
                        ←
                    </button>
                    <button
                        ref={nextRef}
                        className={`${styles.about__navBtn} ${styles["about__navBtn--next"]}`}
                    >
                        →
                    </button>
                </div>
            </Swiper>
        </section>
    );
}
