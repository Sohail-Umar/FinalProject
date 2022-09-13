import React from "react";

function Login() {
    return (
        <>
            <div>
                <label>Email Address</label>
                <input name="email" placeholder="Enter Email Address" />

                <label>Password</label>
                <input name="password" placeholder="Enter Password" />

                <button>Login</button>

                <p>Didn't have any account? Register Now!</p>

            </div>
        </>
    )
}

export default Login;