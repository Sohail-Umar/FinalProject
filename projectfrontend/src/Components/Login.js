import React from "react";
// import './Login';
import { useCreateProductDispatchContext, useCreateProductStateContext } from "../Context/productContext"
import { Link } from "react-router-dom"



function Login() {

    const setProductData = useCreateProductDispatchContext();


    const loginUser = useCreateProductStateContext();


    return (
        <>
            <div>
                <label>Email Address</label>
                <input name="email" placeholder="Enter Email Address" />

                <label>Password</label>
                <input name="password" placeholder="Enter Password" />

                <button>Login</button>

                <p>Didn't have any account? Register Now!</p>
                {/* <Link to={<Login />}>Login as Admin</Link> */}

            </div>
        </>
    )
}

export default Login;