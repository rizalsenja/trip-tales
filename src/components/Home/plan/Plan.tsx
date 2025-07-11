import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "./Plan.module.scss";
import Button from "../../ui/Button/Button";
import {
    icon1, icon2, icon3,
    bgImgPhone1, bgImgPhone2, bgImgPhone3, bgImgPhone4,
    patternTop, patternBottom,
    imgDs1, imgDs2, imgDs3, imgDs4,
    frame2, frame3, frame4, 
    imgStar, imgText2, imgText3, imgText4,
    icon4, iconSearch, iconMap,
} from "../../../assets/img/plan";

const planItems = [
    {
        icon: icon1,
        text: "Build custom itineraries day–by–day",
    },
    {
        icon: icon2,
        text: "Add destinations, accommodations, activities & notes",
    },
    {
        icon: icon3,
        text: "Get time estimates and travel distances",
    },
];

const Plan = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);
    const phone3Ref = useRef<HTMLDivElement>(null);
    const phone4Ref = useRef<HTMLDivElement>(null);
    const content1Ref = useRef<HTMLDivElement>(null);
    const content2Ref = useRef<HTMLDivElement>(null);
    const content3Ref = useRef<HTMLDivElement>(null);
    const content4Ref = useRef<HTMLDivElement>(null);
    const imgDs1Ref = useRef<HTMLImageElement>(null);
    const imgDs2Ref = useRef<HTMLImageElement>(null);
    const imgDs3Ref = useRef<HTMLImageElement>(null);
    const imgDs4Ref = useRef<HTMLImageElement>(null);
    const imgMb2aRef = useRef<HTMLImageElement>(null);
    const imgMb2bRef = useRef<HTMLImageElement>(null);
    const imgMb2cRef = useRef<HTMLImageElement>(null);
    const imgMb2dRef = useRef<HTMLImageElement>(null);
    const imgMb3aRef = useRef<HTMLImageElement>(null);
    const imgMb3bRef = useRef<HTMLImageElement>(null);
    const imgMb3cRef = useRef<HTMLImageElement>(null);
    const imgMb4aRef = useRef<HTMLImageElement>(null);
    const imgMb4bRef = useRef<HTMLImageElement>(null);
    const imgMb4cRef = useRef<HTMLImageElement>(null);


    useEffect(() => {
        if (!sectionRef.current) return;
        // Phone Images Parallax
        [phone1Ref, phone2Ref, phone3Ref, phone4Ref].forEach((ref, i) => {
            if (ref.current) {
                gsap.to(ref.current, {
                    y: (i % 2 === 0 ? -60 : 60),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        });

        [
            imgDs1Ref,
            imgDs2Ref,
            imgDs3Ref,
            imgDs4Ref,
            imgMb2aRef,
            imgMb2bRef,
            imgMb2cRef,
            imgMb2dRef,
            imgMb3aRef,
            imgMb3bRef,
            imgMb3cRef,
            imgMb4aRef,
            imgMb4bRef,
            imgMb4cRef,
        ].forEach((ref) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { autoAlpha: 0, y: 40 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        // Content Fade & Slide
        [content1Ref, content2Ref, content3Ref, content4Ref].forEach((ref) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { autoAlpha: 0, y: 60 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className={styles.plan} ref={sectionRef}>

            <img
                src={patternBottom}
                alt="Phone Background"
                className={styles.plan__patternBottom}
            />
            <div className={styles.plan__block1}>
                <div className={styles.plan__image1} ref={phone1Ref}>

                    <img
                        src={bgImgPhone1}
                        alt="Phone Background"
                        className={styles.plan__background}
                    />

                    <img
                        src={patternTop}
                        alt="Pattern"
                        className={styles.plan__pattern}
                    />

                    <div className={styles.plan__group1}>

                        <img
                            src={imgDs1}
                            alt="Phone Desktop 1"
                            className={styles.plan__background1}
                            ref={imgDs1Ref}
                        />
                    </div>
                </div>

                <div className={styles.plan__content1} ref={content1Ref}>
                    <Button label="Trip Planner" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Plan Your Journey, Your Way</h2>
                    <p className={styles.plan__desc}>
                        Effortlessly organize your travel from start to finish.
                        <br />
                        Create personalized itineraries, add accommodations, attractions, and activities,
                        <br />
                        <br />
                        and manage everything in one place. Whether you're planning a weekend escape or a
                        multi-country adventure, our trip planner keeps you on track.
                    </p>
                    <ul className={styles.plan__list}>
                        {planItems.map((item, index) => (
                            <li key={index} className={styles.plan__item}>
                                <img src={item.icon} alt="icon" className={styles.plan__icon} />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Section 2 */}
            <div className={styles.plan__block2}>
                <div className={styles.plan__image2}>
                    <img
                        src={frame2}
                        alt="Find next adventure"
                        className={styles.plan__frame2}
                    />

                    <div className={styles.plan__group2}>
                        <img
                            src={imgDs2}
                            alt="Phone Desktop 2"
                            className={styles.plan__background2}
                            ref={imgDs2Ref}
                        />

                        <img
                            src={bgImgPhone2}
                            alt="Phone background"
                            className={styles.plan__phoneBg2}
                            ref={imgMb2aRef}
                        />
                        <img
                            src={iconSearch}
                            alt="Search Icon"
                            className={styles.plan__iconSearch}
                            ref={imgMb2bRef}
                        />
                        <img
                            src={imgText2}
                            alt="Text Overlay"
                            className={styles.plan__text2}
                            ref={imgMb2cRef}
                        />
                        <img
                            src={iconMap}
                            alt="Map Graphic"
                            className={styles.plan__map}
                            ref={imgMb2dRef}
                        />


                    </div>
                </div>
                <div className={styles.plan__content2} ref={content2Ref}>
                    <Button label="Destination Discovery" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Find Your Next Adventure</h2>
                    <p className={styles.plan__desc}>
                        Find your perfect getaway with smart, curated suggestions.
                        <br />
                        Browse destinations based on your interests, travel style, budget, and season.
                        
                        From iconic landmarks to hidden gems, uncover new places through reviews, images, and real traveler tips.
                    </p>
                    <div className={styles.plan__btns}>
                        {/* <Button label="Discover More" size="xl" variant="filled" color="primary" /> */}
                    </div>

                </div>
            </div>

            {/* Section 3 */}
            <div className={styles.plan__block3}>
                <div className={styles.plan__image3}>
                    <img src={bgImgPhone3} alt="Share with others" className={styles.plan__phoneBg3} />
                    <div className={styles.plan__group3}>

                        <img
                            src={imgDs3}
                            alt="Phone Desktop 3"
                            className={styles.plan__background3}
                            ref={imgDs3Ref}
                        />
                        <img src={frame3} ref={imgMb3aRef} alt="frame" className={styles.plan__frame3} />
                        <img src={imgStar} ref={imgMb3bRef} alt="star" className={styles.plan__star} />
                        <img src={imgText3} ref={imgMb3cRef} alt="text" className={styles.plan__text3} />
                    </div>

                </div>
                <div className={styles.plan__content3} ref={content3Ref}>
                    <Button label="Social Sharing" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Travel Together, Even Apart</h2>
                    <p className={styles.plan__desc}>
                        Find your perfect getaway with smart, curated suggestions.
                        Browse destinations based on your interests, travel style, budget, and season. From iconic landmarks to hidden gems, uncover new places through reviews, images, and real traveler tips.
                    </p>
                    <div className={styles.plan__stats}>
                        <div className={styles.plan__stat}>
                            <strong>1.000.000+</strong>
                            <span>Hotels</span>
                        </div>
                        <div className={styles.plan__stat}>
                            <strong>65000+</strong>
                            <span>Destination</span>
                        </div>
                        <div className={styles.plan__stat}>
                            <strong>20+</strong>
                            <span>Partners Collaboration</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className={styles.plan__block4}>
                <div className={styles.plan__image4}>
                    <img src={bgImgPhone4} alt="bg-img-phone-4" className={styles.plan__phoneBg4} />
                    <div className={styles.plan__group4}>
                        <img
                            src={imgDs4}
                            alt="Phone Desktop 4"
                            className={styles.plan__background4}
                            ref={imgDs4Ref}
                        />
                        <img src={frame4} ref={imgMb4aRef} alt="frame-4" className={styles.plan__frame4} />
                        <img src={icon4} ref={imgMb4bRef} alt="Reuse plan" className={styles.plan__icon4} />
                        <img src={imgText4} ref={imgMb4cRef} alt="text-4" className={styles.plan__text4} />
                    </div>

                </div>
                <div className={styles.plan__content4} ref={content4Ref}>
                    <Button label="Save & Reuse Plans" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Keep, Reuse, and Travel Smarter</h2>
                    <p className={styles.plan__desc}>
                        Keep your best travel ideas ready for next time.
                        Save your trip itineraries and favorite spots for future use. Reuse or adapt

                        previous plans with just a few taps—perfect for repeat visits or building new trips faster.
                    </p>
                    <div className={styles.plan__btns}>
                        {/* <Button label="Discover" size="xl" variant="filled" color="primary" /> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Plan;
