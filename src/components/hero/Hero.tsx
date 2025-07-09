import React from 'react';
import styles from './Hero.module.scss'
import heroImg from '../../assets/img/hero-img2.webp'
import Button from '../ui/Button.tsx/Button';
import AirportInput from '../ui/Field/AirportInput';   

const Hero = () => {
	return (
		<section className={styles.hero}>
            <div className={styles.hero__bg__img__container}>
                <img src={heroImg} alt='Hero Image' className={styles.hero__bg__img} />
            </div>

			<div className={styles.hero__top}>
                <div className={styles.hero__container}>
                    <div className={styles.hero__text}>
                        <h1 className={styles.hero__heading}>
                            Plan, Discover, and Share Your Journey
                        </h1>
                        <p className={styles.hero__description}>
                            From flights to memories, TripTales helps you make the most of every trip.
                        </p>
                    </div>

                    <div className={styles.hero__buttons}>
                        <Button label='Explore Destination' color='primary' variant='outline' size='xl' />
                        <Button label='Start Planning' color='primary' variant='filled' size='xl' />
                    </div>
                </div>
			</div>

			<div className={styles.hero__form}>
				<h2 className={styles.hero__formTitle}>
					Be Among the First to Explore TripTales
				</h2>

				<form className={styles.hero__form__input}>
                    <div className={styles.hero__form__input__cta}>
                        <div className={styles.hero__field}>
                            <span>Name</span>
                            <input type='text' placeholder='Enter name' />
                        </div>

                        <div className={styles.hero__field}>
                            <span>Country</span>
                            <input type='text' placeholder='Search country' />
                        </div>

                        <div className={styles.hero__field}>
                            <span>Email Address</span>
                            <input type='email' placeholder='Enter email address' />
                        </div>
                    </div>

					<div className={styles.hero__submit}>
						<Button label='Sign Up' color='primary' size='xl' variant='filled' />
					</div>
				</form>

                <label className={styles.hero__checkbox}>
                    <input type='checkbox' className={styles.hero__checkbox__input} />
                    <span>
                        TripTales may contact me for feedback on design and features
                    </span>
                </label>
			</div>

            <div className={styles.hero__form}>
                <h2 className={styles.hero__formTitle}>
                    Hey There, going anywhere?
                </h2>
                <div className={styles.hero__form__tabs}>
                    <button className={`${styles.hero__form__tab} ${styles['hero__form__tab--active']}`}>
                        ✈ Flights
                    </button>
                    <button className={styles.hero__form__tab}>🏨 Hotels</button>
                    <button className={styles.hero__form__tab}>🚆 Trains</button>
                    <button className={styles.hero__form__tab}>🚌 Bus</button>
                    <button className={styles.hero__form__tab}>🚗 Car Rental</button>
                    <button className={styles.hero__form__tab}>🍽 Restaurant</button>
                    <button className={styles.hero__form__tab}>📌 To Dos</button>
                </div>

                <form className={styles.hero__form__input}>
                    {/* One Way / Round Trip */}
                    <div className={styles.hero__form__input__cta}>
                        <label className={styles.hero__radio}>
                            <input type="radio" name="trip" defaultChecked /> One Way
                        </label>
                        <label className={styles.hero__radio}>
                            <input type="radio" name="trip" /> Round Trip
                        </label>
                    </div>

                    {/* From / To */}
                    <div className={styles.hero__form__input__location}>
                        <AirportInput
                            label="From"
                            placeholder="Jakarta (CGK)"
                            onSelect={(airport) => {
                                console.log('From selected:', airport);
                            }}
                        />

                        <AirportInput
                            label="To"
                            placeholder="Going Anywhere"
                            onSelect={(airport) => {
                                console.log('To selected:', airport);
                            }}
                        />
                    </div>

                    {/* Departure */}
                    <div className={styles.hero__form__row}>
                        <div className={styles.hero__field}>
                            <label className={styles.hero__field__label}>
                                <span>Departure</span>
                            </label>
                            <div className={styles.hero__field__wrapper}>
                                <input
                                    type="date"
                                    className={styles.hero__field__input}
                                    id="departure"
                                    name="departure"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Passenger + Class */}
                    <div className={styles.hero__form__row}>
                        <div className={styles.hero__field}>
                            <span>Passenger</span>
                            <input type="text" placeholder="1 Adult" />
                        </div>
                        <div className={styles.hero__field}>
                            <span>Class</span>
                            <input type="text" placeholder="Economy" />
                        </div>
                    </div>

                    {/* Submit */}
                    <div className={styles.hero__submit}>
                        <Button label="Search" color="primary" size="xl" variant="filled" />
                    </div>
                </form>

            </div>

		</section>
	);
};

export default Hero;
