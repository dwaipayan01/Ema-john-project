import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    const handleEmailLogin = event => {
        setEmail(event.target.value);
    }
    const handlePasswordLogin = event => {
        setPassword(event.target.value);
    }
    const hadleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p >Loading...</p>
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert("Sent password reset Email");
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={hadleSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailLogin} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordLogin} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error1?.message}</p>
                    <input className='Login-button' type="submit" value="Login" />
                </form>
                <p className='create-account'>New to Ema john ?<Link to="/signup" className='account'> Create an account</Link></p>
                <p className='create-account'>Forget Password ?<Link onClick={handleResetPassword} style={{ color: "blue" }} to="/login"> Reset Password</Link></p>
            </div>
        </div>

    );
};

export default Login;