import React from 'react';
import Button from '../components/Button';

const Home = () => {
	return (
		<div>
			<h1 className='green'>HOME</h1>

			<div>
				<p>filled</p>
				<Button label='filled primary' size='xl' variant='filled' color='primary' />
				<Button label='filled secondary' size='xl' variant='filled' color='secondary' />
				<Button label='filled red' size='xl' variant='filled' color='red' />
			</div>

			<div>
				<p>outline</p>
				<Button label='outline primary' size='xl' variant='outline' color='primary' />
				<Button label='outline primary' size='xl' variant='outline' color='secondary' />
				<Button label='outline primary' size='xl' variant='outline' color='red' />
			</div>

			<div>
				<p>text</p>
				<Button label='text primary' size='xl' variant='text' color='primary' />
				<Button label='text secondary' size='xl' variant='text' color='secondary' />
				<Button label='text red' size='xl' variant='text' color='red' />
			</div>

			<div>
				<p>link</p>
				<Button label='link primary' size='xl' variant='link' color='primary' />
				<Button label='link primary' size='xl' variant='link' color='secondary' />
				<Button label='link primary' size='xl' variant='link' color='red' />
			</div>
		</div>
	);
};

export default Home;
