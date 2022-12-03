import React, { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";





const ProjectItem = (props) => {

    const [isHover, setIsHover] = useState(false)

    const HandleOnHover = () => {
        setIsHover(!isHover)
    }

    const HandleHoverTextButton = () => {
        setIsHover(true)
    }



    return <div className="project-squircle">


            {!isHover &&
                <AnimatePresence>
                    <motion.div className="project-item" onMouseEnter={HandleOnHover} whileHover={{ opacity: 0 }} exit={{ opacity: 0 }}>

                    {props.image !== "null"
                        ? <div className="project-item-image"><img src={props.image} alt="projectImage" /></div>
                        : <div className="project-item-empty"><h3>{props.emptyProjectTitle}</h3></div>
                    }
                    </motion.div>
                </AnimatePresence>
            }
            {isHover &&
                <div className="project-item" onMouseLeave={HandleOnHover}>
                    <div className="project-item-placeholder">
                        <motion.div className="project-item-text"
                            onMouseEnter={HandleHoverTextButton}
                            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                        >
                            <p>{props.text}</p>
                        </motion.div>
                        <motion.div className="project-item-button"
                            onMouseEnter={HandleHoverTextButton}
                            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                        >
                            <a href={props.href} target={"_blank"} rel="noreferrer"><button>See more!</button></a>
                        </motion.div>
                    </div>
                </div>
            }
    </div>
}
export default ProjectItem
