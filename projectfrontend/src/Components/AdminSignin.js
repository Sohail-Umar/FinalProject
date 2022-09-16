import React from "react";
// import './Login';
import { useCreateAdminStateContext, useCreateAdminDispatchContext } from "../Context/adminAuthContext"
import { Link, useNavigate } from "react-router-dom"
import "../Style/adminlogin.css"



function AdminSignin() {
    const navigate = useNavigate();

    const { handleAdminAuthChange } = useCreateAdminDispatchContext()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleCheckLogin = async (e) => {
        e.preventDefault();
        // if (email === '') {
        //     setIsEmailValid(true);
        // }

        const url = 'http://localhost:3001/adminauth/signin';
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
        if (!json.token) {
            return;
        }
        localStorage.setItem('customer_token', json.token);
        handleAdminAuthChange(true);
        // console.log(isAuthenticated);
        navigate('/admindashboard');
    };


    return (
        <>
            <div className="box-admin">
                <label className="adminLogin-label">Email Address</label>
                <input className="adminLogin-inputs" name="email" placeholder="Enter Email Address" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                <label className="adminLogin-label">Password</label>
                <input className="adminLogin-inputs" name="password" placeholder="Enter Password" value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }} />

                <button className="adminLogin-inputs" onClick={handleCheckLogin}>Login</button>
                {/* <Link to={<Login />}>Login as Admin</Link> */}

            </div>
        </>
    )
}

export default AdminSignin;