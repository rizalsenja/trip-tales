import React from 'react';
import Ultimate from '../../components/ultimate/Ultimate';
import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';
import Faq from '../../components/faq/Faq';
import Plan from '../../components/plan/Plan';

const Home = () => {
	return (
		<>
			<Hero />
			<Ultimate/>
			<Plan />
			<About/>
			<Faq />
		</>
	)
}

export default Home;
