import React from "react";
import landingImage from "../static/images/landingImage12.png"

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
               
            </div>
        </div>
    )
}

export default Landing