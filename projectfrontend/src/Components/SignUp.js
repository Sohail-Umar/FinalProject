import React from "react";

function SignUp() {
    return (
        <>
            <div>
                <label>Full-Name: </label>
                <input name="fullname" placeholder="Enter Full-Name" />

                <label>Email Address: </label>
                <input name="email" placeholder="Enter Email Address" />

                <label>Password: </label>
                <input name="password" placeholder="Enter Password" />

                <button>Login</button>

                <p>Didn't have any account? Register Now!</p>

            </div>
        </>
    )
}

export default SignUp;