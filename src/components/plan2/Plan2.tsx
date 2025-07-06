import './Plan2.scss'
import bgMainXl from '../../assets/plan2/background-plan-xl.webp'
import bgWaveTopXl from '../../assets/plan2/background-wave-top-xl.webp'
import bgWaveBottomXl from '../../assets/plan2/background-wave-bottom-xl.webp'
import contentOne from '../../assets/plan2/plan-1-xl.webp'
import contentTwo from '../../assets/plan2/plan-2-xl.webp'
import contentThree from '../../assets/plan2/plan-3-xl.webp'
import contentFour from '../../assets/plan2/plan-4-xl.webp'
import Button from '../ui/Button.tsx/Button';
import iconJourney1 from '../../assets/plan2/icon-journey-1.webp'
import iconJourney2 from '../../assets/plan2/icon-journey-2.webp'
import iconJourney3 from '../../assets/plan2/icon-journey-3.webp'


const Plan2 = () => {
    return (
        <section className='plan'>
            <div className='plan__background'>
                <div className='plan__background__wave plan__background__wave--top'>
                    <img src={bgWaveTopXl} alt="Wave Top Background" />
                </div>

                <div className='plan__background__main'>
                    <img src={bgMainXl} alt="Background Main" />
                </div>

                <div className='plan__background__wave plan__background__wave--bottom'>
                    <img src={bgWaveBottomXl} alt="Wave Bottom Background" />
                </div>
            </div>

            <div className='plan__container'>
                <div className="plan__content plan__content--one">
                    <div className="plan__img">
                        <img src={contentOne} alt="Trip to Bali with Family" />
                    </div>

                    <div className='plan__text'>
                        <div className='plan__text plan__text__top'>
                            <div className='plan__text__top__heading'>
                                <div className='button__container'>
                                    <Button label='Trip Planner' color='primary' variant='outline' size='xl' className='button__planner' />
                                </div>
                                <h2 className='plan__text__top__heading__title'>Plan Your Journey, Your Way</h2>
                            </div>
                            <p className='plan__text__top__description'>
                                Effortlessly organize your travel from start to finish.
                                Create personalized itineraries, add accommodations, attractions, and activities, <br /><br />
                                
                                and manage everything in one place. Whether you're planning a weekend
                                escape or a multi-country adventure, our trip planner keeps you on track.
                            </p>
                        </div>

                        <div className='plan__text plan__text__bottom'>
                            <div className='plan__text__bottom__label plan__text__bottom__label--first'>
                                <div className='plan__text__bottom__icon'>
                                    <img src={iconJourney1} alt="Journey 1" />
                                </div>

                                <p className='plan__text__bottom__description'>Build custom itineraries day-by-day</p>
                            </div>

                            <div className='plan__text__bottom__label plan__text__bottom__label--second'>
                                <div className='plan__text__bottom__icon'>
                                    <img src={iconJourney2} alt="Journey 2" />
                                </div>

                                <p className='plan__text__bottom__description'>Add destinations, accommodations, activities & notes</p>
                            </div>

                            <div className='plan__text__bottom__label plan__text__bottom__label--third'>
                                <div className='plan__text__bottom__icon'>
                                    <img src={iconJourney3} alt="Journey 3" />
                                </div>

                                <p className='plan__text__bottom__description'>Get time estimates and travel distances</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plan__content plan__content--two">
                    <div className='plan__text'>
                        <div className='plan__text plan__text__top'>
                            <div className='plan__text__top__heading'>
                                <div className='button__container'>
                                    <Button label='Destination Discovery' color='primary' variant='outline' size='xl' className='button__adventure' />
                                </div>
                                <h2 className='plan__text__top__heading__title'>Find Your Next Adventure</h2>
                            </div>
                            <p className='plan__text__top__description'>
                                Effortlessly organize your travel from start to finish.
                                Create personalized itineraries, add accommodations, attractions, and activities, <br /><br />
                                
                                and manage everything in one place. Whether you're planning a weekend
                                escape or a multi-country adventure, our trip planner keeps you on track.
                            </p>
                        </div>

                        <div className='plan__text plan__text__bottom'>
                            <div className="plan__text__bottom--two">
                                <Button label='Discover More' color='primary' variant='filled' size='xl' className='button__discover__more' />
                            </div>
                        </div>
                    </div>

                    <div className="plan__img">
                        <img src={contentTwo} alt="Destination Finder" />
                    </div>
                </div>

                <div className="plan__content plan__content--three">
                    <div className="plan__img">
                        <img src={contentThree} alt="Trip to Bali with Family" />
                    </div>

                    <div className='plan__text'>
                        <div className='plan__text plan__text__top'>
                            <div className='plan__text__top__heading'>
                                <div className='button__container'>
                                    <Button label='Social Sharing' color='primary' variant='outline' size='xl' className='button__social' />
                                </div>
                                <h2 className='plan__text__top__heading__title'>Travel Together, Even Apart</h2>
                            </div>
                            <p className='plan__text__top__description'>
                                Find your perfect getaway with smart, curated suggestions.
                                Browse destinations based on your interests, travel style, budget, and season.   <br /><br />
                                
                                From iconic landmarks to hidden gems, uncover new places through reviews, images, and real traveler tips.
                            </p>
                        </div>

                        <div className='plan__text plan__text__bottom'>
                            <div className='social__card'>
                                <div className='social__card__content'>
                                    <h3 className='social__card__content__number'>1.000.000+</h3>
                                    <p className='social__card__content__description'>Hotels</p>
                                </div>
                                <div className='social__card__content'>
                                    <h3 className='social__card__content__number'>65.000+</h3>
                                    <p className='social__card__content__description'>Destinations</p>
                                </div>
                                <div className='social__card__content'>
                                    <h3 className='social__card__content__number'>20+</h3>
                                    <p className='social__card__content__description'>Partners Collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plan__content plan__content--four">
                    <div className='plan__text'>
                        <div className='plan__text plan__text__top'>
                            <div className='plan__text__top__heading'>
                                <div className='button__container'>
                                    <Button label='Save & Reuse Plans' color='primary' variant='outline' size='xl' className='button__save' />
                                </div>
                                <h2 className='plan__text__top__heading__title'>Keep, Reuse, and Travel Smarter</h2>
                            </div>
                            <p className='plan__text__top__description'>
                                Keep your best travel ideas ready for next time. <br />
                                Save your trip itineraries and favorite spots for future use. Reuse or adapt <br /> <br />
                                
                                previous plans with just a few taps—perfect for repeat visits or building new trips faster.
                            </p>
                        </div>

                        <div className='plan__text plan__text__bottom'>
                            <div className="plan__text__bottom--two">
                                <Button label='Discover' color='primary' variant='filled' size='xl' className='button__discover' />
                            </div>
                        </div>
                    </div>

                    <div className="plan__img">
                        <img src={contentTwo} alt="Destination Finder" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Plan2