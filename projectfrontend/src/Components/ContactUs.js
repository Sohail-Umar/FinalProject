import React from "react";

function ContacUs() {
    return (
        <>
            <div>
                <p>Contact us:</p>
                <p>0900-78601</p>
            </div>
            <div>
                <p>Email us:</p>
                <p>fundohubpk@gmail.com</p>
            </div>
            <div>
                <p>We are here to respond any of your queries regarding the product available on our website</p>
            </div>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name:" />
                <label>Email</label>
                <input type="email" placeholder="Enter Email" />
                <label>Subject</label>
                <input type="text" placeholder="Subject is: " />
                <label>Message</label>
                <input type="text" placeholder="Enter Your Message Here: " />
            </div>
        </>
    )
}

export default ContacUs;