import React from "react";


function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-container-left">
                <div className="intro-heading">
                    <h3>Hey I'm Michael!</h3>
                </div>
                
                <div className="intro-details">
                    <p>I’m about to graduate a Bachelor of Information Technology Degree at Deakin University! I am really passionate about what I have learned at university and I’d love to put those skills and knowledge to work!</p>
                </div>
                 <div className="intro-details">
                    During my degree at Deakin, I succesfully completed 2 Major sequences: Cloud Computing & Application Development. During my university education I also fell in love with programming and the creativity that it provides!
                 </div>
                
            </div>
            <div className="intro-container-right">
                <div className="intro-heading">
                    <h3>Deakin University</h3>
                </div>
                
                <div className="intro-lists">
                    <p style={{fontWeight:"bold"}}>Key Majors and Units</p>
                    <p>Major 1: Cloud Computing</p>
                    <ul>
                        <li>Cloud Application Development</li>
                        <li>Enterprise Network Management</li>
                    </ul>
                    <p>Major 2: Application Development</p>
                    <ul>
                        <li>Full Stack Development: Frontend</li>
                        <li>Full Stack Development: Backend</li>
                        <li>Mobile Application Development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Intro