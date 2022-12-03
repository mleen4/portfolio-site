import React from "react";


function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-heading">
                <h3>Hey! Thanks for getting this far!</h3>
            </div>
            <div className="contact-squircle">
            
                <div className="contact-information">
                    <p>Seriously! I really appreciate that you'd be willing to see this far down the page. I know I still have alot to work on regarding personal projects and furthering my development and programming skills. But I really love what I do, and I am really excited to start my career in the this field!</p>
                    <p id="bottom-para">Any feedback or queries regarding this portfolio, or any questions regarding any of the pieces and projects I have been fortunate to be apart of, feel free to get in touch!</p>
                </div>
                <div className="contact-socials">
                    {/* <div className="contact-socials-item">
                        <p>LinkedIn</p>
                    </div>
                    <div className="contact-socials-item">
                        <p>Github</p>
                    </div>
                    <div className="contact-socials-item">
                        <p>Michael.Leenj1999@gmail.com</p>
                    </div> */}
                
                    <a href="https://www.linkedin.com/in/michael-leen-33a03a182/" target={"_blank"} rel="noreferrer"><button className="contact-socials-button">LinkedIn</button></a>
                    <a href="https://github.com/mleen4" target={"_blank"} rel="noreferrer"><button className="contact-socials-button" >Github</button></a>
                    
                    <p>Michael.Leenj1999@gmail.com</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact