import './LoginAdmin.scss';

const LoginAdmin = () => {
	return (
		<section className='login-admin'>
			<div className='container'>
				{/* <div className='login-logo'>
					<img src={mainLogo} alt='Logo' />
				</div> */}

				<h2 className='login-title'>Login Admin</h2>
				<p className='login-desc'>Login to access Admin</p>

				<form className='login-form'>
					<input type='email' placeholder='Email' className='login-input' />
					<input
						type='password'
						placeholder='Password'
						className='login-input'
					/>

					<button type='submit' className='login-btn'>
						Login
					</button>
				</form>
			</div>
		</section>
	);
};

export default LoginAdmin;
