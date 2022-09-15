import React from "react";
import "../Style/signup.css"
import { Link } from "react-router-dom"


function SignUp() {
    return (
        <>
            <div className="box-signup">
                <label className="userSignup-label">Full-Name: </label>
                <input className="userSignup-inputs" name="fullname" placeholder="Enter Full-Name" />

                <label className="userSignup-label">Email Address: </label>
                <input className="userSignup-inputs" name="email" placeholder="Enter Email Address" />

                <label className="userSignup-label">Password: </label>
                <input className="userSignup-inputs" name="password" placeholder="Enter Password" />

                <button className="userSignup-inputs">Login</button>

                <span className="userSignup-label">Already have an account? <Link to="/login" style={{ color: "white" }}> Login Now!</Link></span>

            </div>
        </>
    )
}

export default SignUp;