import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/main-logo.webp'
import styles from '../assets/styles/components/Navbar.module.scss';
import Button from './Button';


const links = [
    { id: 1, url: '#', text: 'Explore' },
	{ id: 2, url: '#', text: 'Feature' },
	{ id: 3, url: '#', text: 'Book' },
	{ id: 4, url: '#', text: 'Tools' },
];

const Navbar = () => {
	return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div className={styles.navbar__logo}>
                    <img src={logo} alt="Trip Tales Logo" />
                </div>

                <ul className={styles.navbar__links}>
                    {links.map(link => (
                        <li key={link.id}>
                            <NavLink to={link.url}> {/* className={({ isActive }) => (isActive ? 'active' : '')} */}
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={styles.navbar__buttons}>
                    <Button label='Sign Up' size='xl' variant='filled' color='secondary' />
                    <Button label='Log In' size='xl' variant='filled' color='primary' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
