import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	label: string;
	className?: string;
	variant?: 'filled' | 'outline' | 'text' | 'link';
	size?: 'xl' | 'md' | 'sm';
	color?: 'primary' | 'secondary' | 'red';
	disabled?: boolean;
	isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	className = '',
	variant = 'filled',
	size = 'md',
	color = 'primary',
	disabled = false,
	isLoading = false,
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[color]} ${className}`}
			disabled={disabled || isLoading}
		>
			{isLoading ? (
				<span className={styles.loader}></span>
			) : (
				label
			)}
		</button>
	);
};

export default Button;
