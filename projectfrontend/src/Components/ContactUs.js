import React from "react";
import "../Style/contactus.css"

function ContacUs() {
    return (
        <>
            <img className="contactus-background-img" src="..//contactus-background.jpg" />
            <div className="main-contactus">
                <div className="leftbar-contactus">
                    <div className="contact-num">
                        <h2>Store Information</h2>
                        <p>Contact us:</p>
                        <p>0900-78601</p>
                    </div>
                    <div className="contact-num">
                        <p>Email us:</p>
                        <p>fundohubpk@gmail.com</p>
                    </div>
                </div>

                <div className="main-right-contactus">
                    <div>
                        <p><strong>We are here to respond any of your queries regarding the product available on our website</strong></p>
                    </div>
                    <div className="label-input-contactus-main">
                        <label>Name</label>
                        <input type="text" placeholder="Name:" />
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" />
                        <label>Subject</label>
                        <input type="text" placeholder="Subject is: " />
                        <label>Message</label>
                        <input type="text" placeholder="Enter Your Message Here: " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContacUs;