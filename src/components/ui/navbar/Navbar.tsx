import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { hamburgerIcon, mainLogo } from '../../../assets/icons';
// import Button from '../Button/Button';
import styles from './Navbar.module.scss';

const links = [
    { id: 1, url: '#', text: 'Explore' },
	{ id: 2, url: '#', text: 'Feature' },
	{ id: 3, url: '#', text: 'Book' },
	{ id: 4, url: '#', text: 'Tools' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

	return (
        <nav className={`${styles.navbar} ${scrolled ? styles['navbar--scrolled'] : ''}`}>
            <div className={styles.navbar__container}>
                <div className={styles.navbar__logo}>
                    <img src={mainLogo} alt="Trip Tales Logo" />
                </div>

                <ul className={styles.navbar__links}>
                    {links.map(link => (
                        <li key={link.id}>
                            <NavLink to={link.url}>
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={styles.navbar__buttons}>
                    {/* <Button label='Sign Up' size='xl' variant='filled' color='secondary' />
                    <Button label='Log In' size='xl' variant='filled' color='primary' /> */}
                </div>

                {/* Hamburger menu */}
                <div
                    className={styles.navbar__hamburger}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={hamburgerIcon} alt="" />
                </div>
            </div>

            {menuOpen && (
                <div className={styles.navbar__overlay}>
                    <div className={styles.navbar__overlayContent}>
                        <button
                            className={styles.navbar__close}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            &times;
                        </button>
                        <ul>
                            {links.map(link => (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.url}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.navbar__overlayButtons}>
                            {/* <Button label='Sign Up' size='xl' variant='filled' color='secondary' />
                            <Button label='Log In' size='xl' variant='filled' color='primary' /> */}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
