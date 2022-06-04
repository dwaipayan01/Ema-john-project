import React, { useState } from 'react';

const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('');
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhone = event => {
        setPhoneNumber(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, email, address, phoneNumber);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor="Name">Name</label>
                        <input onBlur={handleName} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handleAddress} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handlePhone} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='Login-button' type="submit" value="Add shipping" />
                </form>
                {/* <p className='create-account'>Already have an account ?<Link to="/login" className='account'> Login</Link></p> */}
            </div>
        </div>
    );
};

export default Checkout;