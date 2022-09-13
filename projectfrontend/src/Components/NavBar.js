import React from "react";
import "../Style/navbar.css"
import { Link } from "react-router-dom"


function NavBar() {

    return (
        <>
            <div className="navbar">
                <h3>Fundo</h3>
                <div className="navbar-links">
                    <p>
                        <Link to="/"> Home</Link>
                    </p>
                    <p>
                        <Link to="/products">Products </Link>
                    </p>

                    <p>
                        <Link to="/about">About Us </Link>
                    </p>
                    <p>
                        <Link to="/contactus"> Contact Us</Link>
                    </p>
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                    <p>
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default NavBar