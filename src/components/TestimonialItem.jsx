import { React } from "react";
import { motion } from "framer-motion";
import linkedInIcon from "../static/images/linkedInIcon.png"



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
    
    console.log(props.quoteFontSize)
    console.log(props.LinkedInhref)
    return <motion.div className="testimonials-carousel-person-container"
        {...animateState}
    >
        <div className="testimonial-person-image">
            <img className="testimonial-person-icon" src={require(`../static/images/${props.icon}`)} alt="" />
        </div>
        <div className="testimonial-person-name">
            <h3>{props.name}</h3>
        </div>
        <div className="testimonial-person-role">
            <h3>{props.role}</h3>
        </div>
        <div className="testimonial-person-quote" style={{fontSize: props.quoteFontSize}}>
            <p>{props.quote}</p>
        </div>
        {/* <div className="testimonial-person-socials"> */}
                <div className="testimonial-person-socials-linkedIn">
                    <a href={props.LinkedInhref} target={"_blank"} rel="noreferrer" className="landing-social-icon testimonial-icon">
                        <img className="landing-social-icon-image" src={linkedInIcon} alt="" />
                    </a>
                </div>
            <div className="testimonial-person-socials-email"></div>
        {/* </div> */}

    </motion.div>
}

export default TestimonialItem