import React from 'react'
import './HomePageCss.css'
import AI_Image from './assets/ai.png'
import arrow from './assets/arrow.png'

const HomePage = () => {
    function HairCareHubButtons() {
        return (
            <div>
                <div className='haircarebutton_parent_div'>
                    <div className='hair_care_icon_box'>✦︎</div>
                    <div>
                        <h3 className='hair_care_title'>Style Gallery</h3>
                        <p className='hair_care_description'>
                            Discover hairstyles curated for your hair type
                        </p>
                        <span className='hair_care_text_arrow'>
                            Explore →
                        </span>
                    </div>
                </div>

                <div className='haircarebutton_parent_div'>
                    <div className='hair_care_icon_box'>📅</div>
                    <div>
                        <h3 className='hair_care_title'>Routine Tracker</h3>
                        <p className='hair_care_description'>
                            Track wash days and care routines
                        </p>
                        <span className='hair_care_text_arrow'>
                            Explore →
                        </span>
                    </div>
                </div>

                <div className='haircarebutton_parent_div'>
                    <div className='hair_care_icon_box'>🛍️</div>
                    <div>
                        <h3 className='hair_care_title'>Products</h3>
                        <p className='hair_care_description'>
                            AI-recommended products for your hair
                        </p>
                        <span className='hair_care_text_arrow'>
                            Explore →
                        </span>
                    </div>
                </div>


            </div>
        );
    }

    function WellnessCards() {
        return (
            <div className="wellness_cards_container">

                {/* Card 1 */}
                <div className="wellness_card">
                    <div className="wellness_icon">❤</div>

                    <h3 className="wellness_card_title">Self-Care Rituals</h3>
                    <p className="wellness_card_text">
                        Make wash day a moment of self-love and relaxation
                    </p>
                </div>

                {/* Card 2 */}
                <div className="wellness_card">
                    <div className="wellness_icon">💧</div>

                    <h3 className="wellness_card_title">Hydration Focus</h3>
                    <p className="wellness_card_text">
                        Deep condition weekly for maximum moisture retention
                    </p>
                </div>

                <div className="wellness_card">
                    <div className="wellness_icon">☀️</div>

                    <h3 className="wellness_card_title">Hydration Focus</h3>
                    <p className="wellness_card_text">
                        Deep condition weekly for maximum moisture retention
                    </p>
                </div>

            </div>
        );
    }



    return (
        <div className='main_page_css'>
            <div className='main_page_div2'>
                <p className='ai_box'>
                    <img className='ai_image' src={AI_Image} height={"25px"} width={"25px"} alt="AI Illustration" />
                    AI-Powered Hair Care
                </p>

                <h1 className='embrace_your'>Embrace your</h1>
                <h1 className='natural_crown'>natural crown</h1>

                <p className='text1'>Personalized hairstyle recommendations, care routines, and product suggestions designed specifically for your unique type 3-4 hair journey.</p>

                <button className='explore_styles_box'>Explore Styles
                    <img className='arrow_image' src={arrow} height={"15px"} width={"15px"} alt="Arrow Illustration" />

                </button>

                <button className='browse_products_box'>Browse Products</button>

                <h1 className='hair_care_intor_title'>Your Hair Care Hub</h1>
                <h2 className='hair_care_intor_description'>Everything you need for your natural hair journey</h2>
                {HairCareHubButtons()}


                <div>
                    <div className="wellness_box">
                        <h2 className="wellness_title">Wellness Wisdom</h2>
                        <p className="wellness_subtitle">
                            Nurture your hair with these daily practices for healthy, thriving curls
                            and coils
                        </p>

                        {WellnessCards()}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomePage

