import React from "react";
import "../Style/navbar.css"
import { Link, useLinkClickHandler, useLocation } from "react-router-dom"


function NavBar() {



    const { pathName } = useLocation()
    const showSigninNavbar = pathName === "/login" || pathName === "/signup" ? false : true
    return (
        <>
            {showSigninNavbar && (
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


                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar