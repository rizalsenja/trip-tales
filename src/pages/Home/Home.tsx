import React from 'react';
import Ultimate from '../../components/ultimate/Ultimate';
import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';
import Faq from '../../components/faq/Faq';
import Plan from '../../components/plan/Plan';
import Plan2 from '../../components/plan2/Plan2';

const Home = () => {
	return (
		<>
			<Hero />
			<Ultimate/>
			{/* <Plan /> */}
			<Plan2 />
			<About/>
			<Faq />
		</>
	)
}

export default Home;
