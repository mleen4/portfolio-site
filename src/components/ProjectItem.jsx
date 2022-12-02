import React, { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";





const ProjectItem = (props) => {

    const [isHover, setIsHover] = useState(false)

    const HandleOnHover = () => {
        setIsHover(!isHover)
    }

    const HandleHoverTextButton = () => {
        setIsHover(true)
    }

    const HandleHoverLeave = () => {

    }


    return <div className="project-squircle">
        {!isHover &&
            <AnimatePresence>
                <motion.div className="project-item" onMouseEnter={HandleOnHover} whileHover={{ opacity: 0 }} exit={{ opacity: 0 }}>

                    <div className="project-item-image">
                        <img src={props.image} alt="" />
                    </div>
                </motion.div>
            </AnimatePresence>
        }
        {isHover &&
            <div className="project-item" onMouseLeave={HandleOnHover}>
                <div className="project-item-placeholder">
                    {/* <motion.div className="project-item-image" whileHover={{ opacity: 0 }}>
                    <img src={chameleonIcon} alt="" />
                </motion.div> */}
                    <motion.div className="project-item-text"
                        onMouseEnter={HandleHoverTextButton}
                        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                    >
                        <p>This is some sample text about the project This is some sample text about the project This is some sample text about the project</p>
                    </motion.div>
                    <motion.div className="project-item-button"
                        onMouseEnter={HandleHoverTextButton}
                        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                    >
                        <button>See more!</button>
                    </motion.div>
                </div>
            </div>
        }
    </div>
}





{/* <div className="project-item" onMouseEnter={HandleOnHover}>

<motion.div className="project-item-image"whileHover={{opacity: 0}}>
    <img src={chameleonIcon} alt="" />
</motion.div>
{isHover &&
    <motion.div className="project-item-text"
        onMouseEnter={HandleHoverTextButton}
        initial={{y: "50%", opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
    >
    <p>This is some sample text about the project This is some sample text about the project This is some sample text about the project</p>
    </motion.div>
}

{isHover &&
    <motion.div className="project-item-button"
        onMouseEnter={HandleHoverTextButton}
        initial={{y: "50%", opacity: 0, scale: 0.5}}
        animate={{y: 0, opacity: 1, scale: 1}}
    >
    <button>See more!</button>
    </motion.div>
}
</div> */}


// <div class="poarent">
{/* <div class="squirk">
    </div>
{ isHover && <div class="squirk hover">
</div> }
</div> */}

export default ProjectItem
