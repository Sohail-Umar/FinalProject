import React from "react";
import "../Style/signup.css"
import { Link, useNavigate } from "react-router-dom"
import { useCreateUserDispatchContext } from '../Context/userAuthContext'



function SignUp() {

    const { handleUserAuthChange } = useCreateUserDispatchContext()
    const navigate = useNavigate();
    const [fullname, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:3001/userauth/signup';
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullname,
                email: email,
                password: password,
            }),
        });
        const json = await responce.json();
        console.log(json);
        if (!responce.ok) {
            alert(`User doesn't exist`)
        }
        navigate('/');
    };



    return (
        <>
            <div className="box-signup">
                <label className="userSignup-label">Full-Name: </label>
                <input className="userSignup-inputs" name="fullname" placeholder="Enter Full-Name"
                    onClick={(e) => {
                        setFullName(e.target.value)
                    }} />

                <label className="userSignup-label">Email Address: </label>
                <input className="userSignup-inputs" name="email" placeholder="Enter Email Address"
                    onClick={(e) => {
                        setEmail(e.target.value)
                    }} />

                <label className="userSignup-label">Password: </label>
                <input className="userSignup-inputs" name="password" placeholder="Enter Password"
                    onClick={(e) => {
                        setPassword(e.target.value)
                    }} />

                <button className="userSignup-inputs"
                    onClick={handleSignUp}>SignUp</button>

                <span className="userSignup-label">Already have an account? <Link to="/login" style={{ color: "white" }}> Login Now!</Link></span>

            </div>
        </>
    )
}

export default SignUp;