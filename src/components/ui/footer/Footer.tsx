import styles from './Footer.module.scss';
import {
    mainLogo,
    // appStoreLogo,
    // googlePlayLogo,
    // facebookLogo,
    // instagramLogo,
    // tiktokLogo,
    // xLogo,
    // youtubeLogo
} from '../../../assets/icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <img src={mainLogo} alt="Trip Tales Logo" className={styles.footer__logo} />

                <div className={styles.footer__grid}>
                    <div className={`${styles.footer__grid} ${styles['footer__grid--left']}`}>
                        {/* SOCIAL */}
                        <div className={styles.footer__section}>
                            {/* <h2 className={`${styles['footer__section--title']}`}>Social</h2> */}
                            <div className={`${styles['footer__section--content']} ${styles['footer__section--content--large-gap']}`}>
                                {/* <div className={styles['footer__section--listLink']}>
                                    <Link to={'/'} className={styles['footer__section--link']}>Feed</Link>
                                    <Link to={'/'} className={styles['footer__section--link']}>Explore</Link>
                                </div> */}

                                <p className={styles['footer__section--address']}>TripTales ApS CVR: 45515044 Jacobsens Alle 5, 2900 Hellerup, Denmark</p>
                            </div>
                        </div>

                        {/* BOOKING */}
                        {/* <div className={styles.footer__section}>
                            <h2 className={`${styles['footer__section--title']}`}>Booking</h2>
                            <div className={styles['footer__section--content']}>
                                <Link to={'/'} className={styles['footer__section--link']}>Flight</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>Train</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>Bus</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>Car Rental</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>To Do's</Link>
                            </div>
                        </div> */}

                        {/* ACCOUNT */}
                        {/* <div className={styles.footer__section}>
                            <h2 className={`${styles['footer__section--title']}`}>Account</h2>
                            <div className={styles['footer__section--content']}>
                                <Link to={'/'} className={styles['footer__section--link']}>My Trips</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>Profile</Link>
                            </div>
                        </div> */}

                        {/* TRAVEL TOOL */}
                        {/* <div className={styles.footer__section}>
                            <h2 className={`${styles['footer__section--title']}`}>Travel Tool</h2>
                            <div className={styles['footer__section--content']}>
                                <Link to={'/'} className={styles['footer__section--link']}>Destination Finder</Link>
                                <Link to={'/'} className={styles['footer__section--link']}>Feature X</Link>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className={`${styles.footer__grid} ${styles['footer__grid--right']}`}>
                        <div className={`${styles.footer__section} ${styles['footer__section--store']}`}>
                            <h2 className={styles['footer__section--title']}>Find Us</h2>
                            <div className={styles['footer__section--badges']}>
                                <img src={appStoreLogo} alt="App Store Trip Tales Logo" />
                                <img src={googlePlayLogo} alt="Google Play Trip Tales Logo" />
                            </div>
                        </div>

                        <div className={`${styles.footer__section} ${styles['footer__section--social']}`}>
                            <h2 className={styles['footer__section--title']}>Join Us</h2>
                            <div className={styles['footer__socials']}>
                                <div className={styles['footer__social']}>
                                    <img src={instagramLogo} alt="Instagram Logo" />
                                </div>
                                <div className={styles['footer__social']}>
                                    <img src={youtubeLogo} alt="Youtube Logo" />
                                </div>
                                <div className={styles['footer__social']}>
                                    <img src={tiktokLogo} alt="Tiktok Logo" />
                                </div>
                                <div className={styles['footer__social']}>
                                    <img src={xLogo} alt="X Logo" />
                                </div>
                                <div className={styles['footer__social']}>
                                    <img src={facebookLogo} alt="Facebook Logo" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className={styles.footer__bottom}>
                <h2 className={styles.footer__copyright}>Copyright &copy; 2025 TripTales. All right reserved</h2>

                <div className={styles.footer__legal}>
                    <Link to={'/'} className={styles.footer__link}>Privacy Policy</Link>
                    <Link to={'/'} className={styles.footer__link}>Terms &amp; Conditions</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer