import styles from "./Ultimate.module.scss";

import item1 from "../../assets/ultimate/ultimate-1.webp";
import item2 from "../../assets/ultimate/ultimate-2.webp";
import item3 from "../../assets/ultimate/ultimate-3.webp";
import item4 from "../../assets/ultimate/ultimate-4.webp";
import Button from "../ui/Button/Button";

const features = [
    {
        icon: item1,
        title: "Trip Planner",
        desc: "Plan trips with flights, hotels, activities & collaborators",
    },
    {
        icon: item2,
        title: "Destination Discovery",
        desc: "Explore destinations by season, budget, time & vibe",
    },
    {
        icon: item3,
        title: "Social Sharing",
        desc: "Post your trip stories & see others’ real experiences",
    },
    {
        icon: item4,
        title: "Save & Reuse Plans",
        desc: "Post your trip stories & see others’ real experiences",
    },
];

export default function Ultimate() {
    return (
        <section className={styles.ultimate}>
            <Button label='Features' size='xl' variant='outline' color='primary' />
            <h2 className={styles.ultimate__title}>Your Ultimate Travel Companion</h2>
            <div className={styles.ultimate__list}>
                {features.map((feature, idx) => (
                    <div className={styles.ultimate__card} key={idx}>
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className={styles.ultimate__icon}
                            loading="lazy"
                        />
                        <div className={styles.ultimate__cardContent}>
                            <h3 className={styles.ultimate__cardTitle}>{feature.title}</h3>
                            <p className={styles.ultimate__cardDesc}>{feature.desc}</p>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
