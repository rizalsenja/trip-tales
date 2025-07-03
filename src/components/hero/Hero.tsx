import React from 'react';
import styles from './Hero.module.scss'
import heroImg from '../../assets/img/hero-img.webp'
import Button from '../ui/Button.tsx/Button';

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
		</section>
	);
};

export default Hero;
