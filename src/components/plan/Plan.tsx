import styles from "./Plan.module.scss";
import Button from "../ui/Button.tsx/Button";
import {
    icon1, icon2, icon3,
    bgImgPhone1, bgImgPhone2, bgImgPhone3, bgImgPhone4,
    patternTop, patternBottom,
    imgDs1, imgDs2, imgDs3, imgDs4,
    frame2, frame3, frame4, 
    imgStar, imgText2, imgText3, imgText4,
    icon4, iconSearch, iconMap,
} from "../../assets/plan";

// import icon1 from '../../assets/plan/icon-itinerary.webp'
// import icon2 from '../../assets/plan/icon-distances.webp'
// import icon3 from '../../assets/plan/icon-destination.webp'
// import bgImgPhone1 from '../../assets/plan/bg-img-phone-1.webp'
// import bgImgPhone2 from '../../assets/plan/bg-img-phone-2.webp'
// import bgImgPhone3 from '../../assets/plan/bg-img-phone-3.webp'
// import bgImgPhone4 from '../../assets/plan/bg-img-phone-4.webp'
// import patternTop from '../../assets/plan/pattern.webp'
// import patternBottom from '../../assets/plan/pattern-bottom.webp'
// import imgDs1 from '../../assets/plan/img-ds-1.webp'
// import imgDs2 from '../../assets/plan/img-ds-2.webp'
// import imgDs3 from '../../assets/plan/img-ds-3.webp'
// import imgDs4 from '../../assets/plan/img-ds-4.webp'
// import frame2 from '../../assets/plan/frame-2.webp'
// import frame3 from '../../assets/plan/frame-3.webp'
// import frame4 from '../../assets/plan/frame-4.webp'
// import imgStar from '../../assets/plan/star.webp'
// import imgText2 from '../../assets/plan/text-2.webp'
// import imgText3 from '../../assets/plan/text-3.webp'
// import imgText4 from '../../assets/plan/text-4.webp'
// import icon4 from '../../assets/plan/icon-4.webp'
// import iconSearch from '../../assets/plan/icon-search.webp'
// import iconMap from '../../assets/plan/map.webp'

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
    return (
        <section className={styles.plan}>

            <img
                src={patternBottom}
                alt="Phone Background"
                className={styles.plan__patternBottom}
            />
            <div className={styles.plan__block1}>
                <div className={styles.plan__image1}>

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
                            alt="Phone Background"
                            className={styles.plan__background1}
                        />
                    </div>
                </div>

                <div className={styles.plan__content1}>
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
                            alt="Phone background"
                            className={styles.plan__background2}
                        />

                        <img
                            src={bgImgPhone2}
                            alt="Phone background"
                            className={styles.plan__phoneBg2}
                        />
                        <img
                            src={iconSearch}
                            alt="Search Icon"
                            className={styles.plan__iconSearch}
                        />
                        <img
                            src={imgText2}
                            alt="Text Overlay"
                            className={styles.plan__text2}
                        />
                        <img
                            src={iconMap}
                            alt="Map Graphic"
                            className={styles.plan__map}
                        />


                    </div>
                </div>
                <div className={styles.plan__content2}>
                    <Button label="Destination Discovery" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Find Your Next Adventure</h2>
                    <p className={styles.plan__desc}>
                        Find your perfect getaway with smart, curated suggestions.
                        <br />
                        Browse destinations based on your interests, travel style, budget, and season.
                        
                        From iconic landmarks to hidden gems, uncover new places through reviews, images, and real traveler tips.
                    </p>
                    <div className={styles.plan__btns}>
                        <Button label="Discover More" size="xl" variant="filled" color="primary" />
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
                            alt="Phone background"
                            className={styles.plan__background3}
                        />
                        <img src={frame3} alt="frame" className={styles.plan__frame3} />
                        <img src={imgStar} alt="star" className={styles.plan__star} />
                        <img src={imgText3} alt="text" className={styles.plan__text3} />
                    </div>

                </div>
                <div className={styles.plan__content3}>
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
                            alt="Phone background"
                            className={styles.plan__background4}
                        />
                        <img src={frame4} alt="frame-4" className={styles.plan__frame4} />
                        <img src={icon4} alt="Reuse plan" className={styles.plan__icon4} />
                        <img src={imgText4} alt="text-4" className={styles.plan__text4} />
                    </div>

                </div>
                <div className={styles.plan__content4}>
                    <Button label="Save & Reuse Plans" size="xl" variant="outline" color="primary" className={styles.button__top} />
                    <h2 className={styles.plan__title}>Keep, Reuse, and Travel Smarter</h2>
                    <p className={styles.plan__desc}>
                        Keep your best travel ideas ready for next time.
                        Save your trip itineraries and favorite spots for future use. Reuse or adapt

                        previous plans with just a few taps—perfect for repeat visits or building new trips faster.
                    </p>
                    <div className={styles.plan__btns}>
                        <Button label="Discover" size="xl" variant="filled" color="primary" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Plan;
