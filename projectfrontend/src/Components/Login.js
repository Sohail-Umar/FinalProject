import React from "react";
// import './Login';
// import { useCreateUserStateContext, handleUserAuthChange } from "../Context/userAuthContext"
// import useCreateUserStateContext from "../Context/userAuthContext";
import { useCreateUserDispatchContext } from "../Context/userAuthContext";
import { Link, useNavigate } from "react-router-dom"
import "../Style/login.css"



function Login() {
    const { handleUserAuthChange } = useCreateUserDispatchContext()
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleCheckLogin = async e => {
        e.preventDefault();
        // if (email === '') {
        //     setIsEmailValid(true);
        // }

        const url = 'http://localhost:3001/userauth/signin';
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const json = await responce.json();
        console.log(json);
        // if (!json.token) {
        //     return;
        // }
        // localStorage.setItem('customer_token', json.token);
        handleUserAuthChange(true);
        // console.log(isAuthenticated);
        navigate('/');
    };


    return (
        <>
            <div className="box-login">
                <label className="userLogin-label" >Email Address</label>
                <input className="userLogin-inputs" name="email" placeholder="Enter Email Address" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                <label className="userLogin-label">Password</label>
                <input className="userLogin-inputs" name="password" placeholder="Enter Password" value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }} />

                <button className="userLogin-inputs" onClick={handleCheckLogin}>Login</button>

                <span className="userLogin-label">Didn't have any account? <Link to="/signup" style={{ color: "white" }}> Register Now!</Link></span>
                {/* <Link to={<Login />}>Login as Admin</Link> */}

            </div>
        </>
    )
}

export default Login;