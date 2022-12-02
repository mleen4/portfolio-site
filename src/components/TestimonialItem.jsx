import { React } from "react";
import { motion } from "framer-motion";


const animateInOutLeft = {
    initial: { x: "80%", opacity: 0, scale: 0.5, },
    animate: { x: 0, opacity: 1, scale: 1, duration: .3 },
    transition: { duration: .3, when: "after" },
    exit: { x: "-80%", scale: 0.5, opacity: 0 }
}

const animateInOutRight = {
    initial: { x: "-80%", opacity: 0, scale: 0.5, },
    animate: { x: 0, opacity: 1, scale: 1, duration: .3 },
    transition: { duration: .3, when: "after" },
    exit: { x: "80%", scale: 0.5, opacity: 0 }
}

const TestimonialItem = (props) => {
    let animateState = (props.animationDirection === "left" ? animateInOutRight : animateInOutLeft)
    console.log(props.animationDirection)
    return <motion.div className="testimonials-carousel-person-container"
        {...animateState}
    >
        <div className="testimonial-person-image">

        </div>
        <div className="testimonial-person-name">
            <h3>{props.name}</h3>
        </div>
        <div className="testimonial-person-role">
            <h3>{props.role}</h3>
        </div>
        <div className="testimonial-person-quote">
            <p>{props.quote}</p>
        </div>
        <div className="testimonial-person-socials">
            <div className="testimonial-person-socials-linkedIn">
                {/* little Icon here */}
            </div>
            <div className="testimonial-person-socials-email"></div>
        </div>

    </motion.div>
}

export default TestimonialItem