import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const KnowledgeItem = (props) =>
{
    const [isShowing, setIsShowing] = useState(false)

    const HandleOnClick = () => {
        setIsShowing(!isShowing)
    }

    return <div className="knowledge-column">
        <div className="knowledge-title">
            <h3>{props.title}</h3>
        </div>
        <div className="knowledge-icon">

        </div> 
        <div className="knowledge-description">
            <p>{props.description}</p>
        </div> 
        <div className="knowledge-tools">
            <h4>{props.heading}</h4>
            <p>{props.tools}</p>
        </div>
        <div className="knowledge-example">
            <h4>Example:</h4>
            <p>{props.example}</p>
        </div>
        <div className="knowledge-see-more">
            <button className="see-more-button" onClick={HandleOnClick}>See More!</button>
            <AnimatePresence>
            {isShowing && 
            <motion.div
            key="seeMore"
                initial={{y: "50%", opacity: 0, scale: 0.5}}
                animate={{y: 0, opacity: 1, scale: 1}}
                exit={{y: "50%", opacity: 0, scale: 0.5}}
                transition={{duration:0.2, ease: "easeOut"}}
                className="knowledge-see-more-anim"
            >
                <div className="knowledge-see-more-github-button">
                        <div className="knowledge-see-more-github-button-icon">
                            <img src={require(`../static/images/githublogo3.png`)} alt="githublogo" />
                        </div>
                        <div className="knowledge-see-more-github-button-text">
                            <p>Github Link</p>
                        </div>          
                </div>
            </motion.div>}
            </AnimatePresence>   
        </div>
    </div>
}

export default KnowledgeItem