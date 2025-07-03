import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	label: string;
	variant?: 'filled' | 'outline' | 'text' | 'link';
	size?: 'xl' | 'md' | 'sm';
	color?: 'primary' | 'secondary' | 'red';
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	variant = 'filled',
	size = 'md',
	color = 'primary',
	disabled = false,
}) => {
	return (
		<button className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[color]}`} disabled={disabled}>
        {label}
		</button>
	);
};

export default Button;
