import { useState } from 'react';
import './Hero.scss';
import heroImg from '../../assets/img/hero-img2.webp';
import Button from '../ui/Button.tsx/Button';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import CountryAutoComplete from '../Home/CountryAutoComplete/CountryAutocomplete'

type ToastType = 'success' | 'error' | 'validation';

type ToastConfig = {
	message: string;
	position: 'top-center' | 'bottom-right' | 'bottom-left';
	duration: number;
};

const TOAST: Record<ToastType, ToastConfig> = {
	success: {
		message:
			'Thank you for signing up! You will be the first to know when TripTales launches.',
		position: 'top-center',
		duration: 6000,
	},
	error: {
		message: 'Something went wrong. Please try again later.',
		position: 'top-center',
		duration: 4000,
	},
	validation: {
		message: 'Please fill in all fields.',
		position: 'top-center',
		duration: 3000,
	},
};

const Hero = () => {
	const [formData, setFormData] = useState({
		name: '',
		country: '',
		email: '',
		feedback: false,
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false); // track loading

	const showToast = (type: ToastType) => {
		const config = TOAST[type];
		const show = type === 'success' ? toast.success : toast.error;
		show(config.message, {
			position: config.position,
			duration: config.duration,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		if (
			!formData.name.trim() ||
			!formData.country.trim() ||
			!formData.email.trim()
		) {
			showToast('validation');
			setIsLoading(false);
			return;
		}

		try {
			await addDoc(collection(db, 'signup-newsletter'), {
				...formData,
				createdAt: new Date(),
			});

			showToast('success');
			setIsSubmitted(true);
			setFormData({ name: '', country: '', email: '', feedback: false });
		} catch (error) {
			console.error('Error saving to Firestore:', error);
			showToast('error');
		} finally {
			setIsLoading(false); // always reset loading
		}
	};

	return (
		<section className='hero'>
			<div className='hero__bg__img__container'>
				<img src={heroImg} alt='Hero Image' className='hero__bg__img' />
			</div>

			<div className='hero__top'>
				<div className='hero__container'>
					<div className='hero__text'>
						<h1 className='hero__heading'>
							Plan, Discover, and Share Your Journey
						</h1>
						<p className='hero__description'>
							From flights to memories, TripTales helps you make the most of
							every trip.
						</p>
					</div>

					<div className='hero__buttons'>
						<Button
							label='Explore Destination'
							color='primary'
							variant='outline'
							size='xl'
						/>
						<Button
							label='Start Planning'
							color='primary'
							variant='filled'
							size='xl'
						/>
					</div>
				</div>
			</div>

			<div className='hero__form'>
				<div
					className={
						isSubmitted ? 'hero__form__titleSuccess' : 'hero__form__container'
					}
				>
					{!isSubmitted ? (
						<>
							<h2 className='hero__formTitle'>
								Be Among the First to Explore TripTales
							</h2>

							<form className='hero__form__input' onSubmit={handleSubmit}>
								<div className='hero__form__input__cta'>
									<div className='hero__field'>
										<span>Name</span>
										<input
											type='text'
											placeholder='Enter name'
											name='name'
											value={formData.name}
											onChange={handleChange}
										/>
									</div>

									<div className='hero__field'>
										<span>Country</span>
										<CountryAutoComplete
											value={formData.country}
											onChange={(val) =>
												setFormData((prev) => ({ ...prev, country: val }))
											}
										/>
									</div>

									<div className='hero__field'>
										<span>Email Address</span>
										<input
											type='email'
											placeholder='Enter email address'
											name='email'
											value={formData.email}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className='hero__submit'>
									<Button
										label='Sign Up'
										color='primary'
										size='xl'
										variant='filled'
										isLoading={isLoading}
										disabled={isLoading}
									/>
								</div>
							</form>

							<label className='hero__checkbox'>
								<input
									type='checkbox'
									name='feedback'
									className='hero__checkbox__input'
									checked={formData.feedback}
									onChange={handleChange}
								/>
								<span>
									TripTales may contact me for feedback on design and features
								</span>
							</label>
						</>
					) : (
						<h2 className='hero__formTitle'>
							Welcome to TripTales! <br />
							You'll be the first to know once the journey begins.
						</h2>
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;
