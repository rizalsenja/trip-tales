import React from 'react';
import Ultimate from '../../components/ultimate/Ultimate';
import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';
import Faq from '../../components/faq/Faq';

const Home = () => {
	return (
		<>
			<Hero />
			<Ultimate/>
			<About/>
			<Faq />
			
		</>
	)
}

export default Home;
