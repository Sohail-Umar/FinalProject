import React from "react";
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from "./ContactUs"
import Products from './Products'
import { Link } from "react-router-dom"
import "../Style/footer.css"


function Footer() {
    return (
        <>
            <div className="row">
                <footer>
                    <div className="footer-menu">
                        <ul>
                            <li><Link to={<Home />}>Home</Link></li>
                            <li><Link target="_blank" to={<Products />}>Products</Link></li>
                            <li><Link target="_blank" to={<AboutUs />}>About</Link></li>
                            <li><Link target="_blank" to={<ContactUs />}>ContactUs</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social-icons">
                        <ul>
                            <li><Link target="_blank" to="https://www.facebook.com/"><img src="..//facebook.png" alt="social media icons" /></Link></li>
                            <li><Link target="_blank" to="https://www.instagram.com/"><img src="..//instagram.png" alt="social media icons" /></Link></li>
                            <li><Link target="_blank" to="https://www.twitter.com/"><img src="..//twitter.png" alt="social media icons" /></Link></li>
                            <li><Link target="_blank" to="https://www.pinterest.com/"><img src="..//pinterest.png" alt="social media icons" /></Link></li>
                            <li><Link target="_blank" to="https://www.linkedin.com/"><img src="..//linkedin.png" alt="social media icons" /></Link></li>
                        </ul>
                    </div>

                    <div style="color:#FFF; text-align:center">
                        <p>© Copyright 2020 XYZLaptops.com - All Rights Reserved</p>
                    </div>
                </footer>
            </div>

        </>
    )
}


export default Footer