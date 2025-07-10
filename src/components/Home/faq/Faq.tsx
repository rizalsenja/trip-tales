import { useState, type JSX } from "react";
import styles from "./Faq.module.scss";
import Button from "../../ui/Button/Button";
import { iconArrow } from '../../../assets/img/faq'

// Define type for FAQ entry
type FaqItem = {
    question: string;
    answer: string;
};

// Define tab names as string literal union
type TabCategory = "General" | "Booking" | "Destination" | "Support";

// Tabs & FAQ data
const tabs: TabCategory[] = ["General", "Booking", "Destination", "Support"];

const faqs: Record<TabCategory, FaqItem[]> = {
    General: [
        {
            question: "What is an Online Travel Agent (OTA)?",
            answer:
                "An Online Travel Agent is a digital platform that allows you to search, compare, and book travel services such as flights, hotels, vacation packages, and car rentals—all in one place.",
        },
        {
            question: "Is it safe to book through your platform?",
            answer: "Yes! We use secure payment gateways and protect your personal data.",
        },
        {
            question: "Can I change or cancel my booking?",
            answer: "Yes, depending on the policy of the airline or hotel.",
        },
        {
            question: "Do you charge additional service fees?",
            answer: "No additional service fees are charged.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Visa, MasterCard, PayPal, and more.",
        },
    ],
    Booking: [],
    Destination: [],
    Support: [],
};

export default function Faq(): JSX.Element {
    const [activeTab, setActiveTab] = useState<TabCategory>("General");
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className={styles.faq}>
            <Button label='FAQs' size='xl' variant='outline' color='primary' />
            <h2 className={styles.faq__title}>Frequently Asked Question</h2>

            <div className={styles.faq__tabs}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.faq__tab} ${tab === activeTab ? styles["faq__tab--active"] : ""
                            }`}
                        onClick={() => {
                            setActiveTab(tab);
                            setActiveIndex(null);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className={styles.faq__list}>
                {faqs[activeTab].map((faq, idx) => (
                    <div
                        key={idx}
                        className={`${styles.faq__item} ${activeIndex === idx ? styles["faq__item--active"] : ""
                            }`}
                    >
                        <button
                            className={styles.faq__question}
                            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                        >
                            {faq.question}
                            <img
                                src={iconArrow}
                                alt="Toggle arrow"
                                className={`${styles.faq__icon} ${activeIndex === idx ? styles["faq__icon--active"] : ""}`}
                            />
                        </button>
                        {activeIndex === idx && (
                            <div className={styles.faq__answer}>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
