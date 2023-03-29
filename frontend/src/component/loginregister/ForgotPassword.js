import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function ForgotPassword() {

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, email } = document.forms[0];

    };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <div>
                <Link to="/">Home</Link>
            </div>
            <Outlet />
        </div>
    );

    return (
        <div className="container navoffset">
            <div className="login-form">
                <h2 className="center">Reset Password</h2>
                {renderForm}
            </div>
        </div>
    );
}


export default ForgotPassword;