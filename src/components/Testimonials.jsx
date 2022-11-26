import {React, useState} from "react";
import testimonialObjects from "../testimonialObjects";



function Testimonials() {
    const [testimonial, handleTestimonialChange] = useState(0)

    const handleCarosel = () => {

    }




    return (
        <div className="testimonials-container">
            <div className="testimonials-carousel">
                <div className="testimonials-carousel-right-arrow"></div>
                <div className="testimonials-carousel-person-container">
                    <div className="testimonial-person-image"></div>
                    <div className="testimonial-person-name"></div>
                    <div className="testimonial-person-role"></div>
                    <div className="testimonial-person-quote"></div>
                    
                </div>
                <div className="testimonials-carousel-left-arrow"></div>
            </div>
        </div>
    )
}

export default Testimonials