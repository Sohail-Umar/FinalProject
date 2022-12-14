import React from "react";
import "../Style/navbar.css"
import { Link, useLocation } from "react-router-dom"


function NavBar() {
    const { pathName } = useLocation()
    const showNavbar = pathName === "/" || pathName === "/products"
        || pathName === "/about" || pathName === "/contactus" ? false : true
    return (
        <>
            {showNavbar && (
                <div className="navbar">
                    <h3>Fundo</h3>
                    <div className="navbar-links">
                        <p>
                            <Link to="/" className="li-navbar"> Home</Link>
                        </p>
                        <p>
                            <Link to="/products" className="li-navbar">Products </Link>
                        </p>

                        <p>
                            <Link to="/about" className="li-navbar">About Us </Link>
                        </p>
                        <p>
                            <Link to="/contactus" className="li-navbar"> Contact Us</Link>
                        </p>
                        <p>
                            <Link to="/login" className="li-navbar">Login</Link>
                        </p>
                        <p>
                            <Link to="/signup" className="li-navbar">Sign Up</Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar