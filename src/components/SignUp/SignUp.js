import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate("/shop");
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be six chareacter");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='Login-button' type="submit" value="Sign up" />
                </form>
                <p className='create-account'>Already have an account ?<Link to="/login" className='account'> Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;