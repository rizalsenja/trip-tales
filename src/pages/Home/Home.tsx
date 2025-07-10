import Ultimate from '../../components/Home/ultimate/Ultimate';
import About from '../../components/Home/about/About';
import Hero from '../../components/Home/hero/Hero';
import Faq from '../../components/Home/faq/Faq';
import Plan from '../../components/Home/plan/Plan';

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
