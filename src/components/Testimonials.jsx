import { React, useState } from "react";
import {AnimatePresence} from "framer-motion";
import TestimonialItem from "./TestimonialItem";
import testimonialObjects from "../testimonialObjects";

function Testimonials() {
    const [testimonial, handleTestimonialChange] = useState(0)
    const [animateDirection, handleAnimateDirection] = useState()
    const length = testimonialObjects.length

    const handleCarousel = (direction) => {
        if (direction === 'prev') {
            handleAnimateDirection("left")
            return (testimonial !== 0 ? (handleTestimonialChange(testimonial - 1)) : (handleTestimonialChange(length - 1)))
        } else {
            handleAnimateDirection("right")
            return (testimonial === (length - 1) ? (handleTestimonialChange(0)) : (handleTestimonialChange(testimonial + 1)))
        }
    }

    return (
        <div className="testimonials-container">
            {/* Probs a title here */}
            <div className="testimonials-carousel">
                <div className="testimonials-carousel-right-arrow-col arrow-column">
                    <div className="left-arrow move-arrow">
                        <p onClick={() => handleCarousel('prev')}>Prev</p>
                    </div>
                </div>
                {testimonial <= length &&
                    <AnimatePresence mode="wait">
                        <TestimonialItem
                            key={testimonialObjects[testimonial].key}
                            name={testimonialObjects[testimonial].name}
                            role={testimonialObjects[testimonial].role}
                            quote={testimonialObjects[testimonial].quote}
                            icon={testimonialObjects[testimonial].icon}
                            LinkedInhref={testimonialObjects[testimonial.linkedInLink]}
                            email={testimonialObjects[testimonial].email}
                            animationDirection={animateDirection}
                            quoteFontSize={testimonialObjects[testimonial].fontSize}
                        />
                    </AnimatePresence>
                }
                <div className="testimonials-carousel-left-arrow-col arrow-column">
                    <div className="right-arrow move-arrow">
                        <p onClick={() => handleCarousel('next')}>Next</p>
                        {/* This was being a pain, issue was too many re-renders - fix here that I need to understand, something going on with the currying  https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials