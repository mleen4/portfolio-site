import {React, useState} from "react";
import testimonialObjects from "../testimonialObjects";



function Testimonials() {
    const [testimonial, handleTestimonialChange] = useState(0)

    const handleCarosel = () => {

    }




    return (
        <div className="testimonials-container">
            {/* Probs a title here */}
            <div className="testimonials-carousel">
                <div className="testimonials-carousel-right-arrow-col arrow-column">
                    <div className="left-arrow move-arrow"></div>
                </div>
                <div className="testimonials-carousel-person-container">
                    {/* this probs can be a component might make it easier to traverse */}
                    <div className="testimonial-person-image"></div>
                    <div className="testimonial-person-name"></div>
                    <div className="testimonial-person-role"></div>
                    <div className="testimonial-person-quote"></div>
                    <div className="testimonial-person-socials"></div>
                    
                </div>
                <div className="testimonials-carousel-left-arrow-col arrow-column">
                    <div className="right-arrow move-arrow"></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials