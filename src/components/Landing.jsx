import React from "react";
import landingImage from "../static/images/landingImage12.png"
import githubIcon from "../static/images/githublogo3.png"
import linkedInIcon from "../static/images/linkedInIcon.png"
import emailIcon from "../static/images/emailIcon.png"

function Landing() {
    return (
        <div className="landing-container"> 
            <div className="landing-container-left">
                <div className="landing-splash">
                    <img src={landingImage} alt="" />
                </div>
            </div>
            <div className="landing-container-right">
                
                <div className="landing-title-container">
                    <div className="landing-title">
                        <h1>&lt; Michael <br/> Leen /&gt;</h1>
                    </div>
                    <div className="landing-info">
                        <h3>Deakin University IT Under-graduate</h3>
                    </div>
                    
                </div>
                <div className="landing-socials">
                        <a href="https://github.com/mleen4" target={"_blank"} rel="noreferrer">
                            <div className="landing-social-icon">
                                <img className="landing-social-icon-image" src={githubIcon} alt="" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/michael-leen-33a03a182/" target={"_blank"} rel="noreferrer">
                            <div className="landing-social-icon">
                                <img className="landing-social-icon-image" src={linkedInIcon} alt="" />
                            </div>
                        </a>
                        <a href="mailto:michael.leenj@gmail.com" target={"_blank"} rel="noreferrer">
                            <div className="landing-social-icon">
                                <img className="landing-social-icon-image" src={emailIcon} alt="" />
                            </div>
                        </a>

                </div>
               
            </div>
        </div>
    )
}

export default Landing