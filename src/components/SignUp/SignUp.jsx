import React, { useContext, useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const {error, success, createUser, setError, setSuccess} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        console.log(email, password , conPassword);
        if(password !== conPassword){
            setError("Password And confirm Password doesn't match");
        }else if(password.length < 6){
            setError("Password at least 6 character");
        }else{
            createUser(email, password)
            .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error=>{
                console.log(error.message);
                setError(error.message);
            })
        }



    }
    return (
        <div className='form-container'>
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSignUp} >
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email" />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required placeholder="Enter Your Password" />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="conPassword" id="conPassword" required placeholder="Retype Your Password" />
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            {
                error &&  <p className='error-msg'>{error}</p>
            }
            {
                success &&  <p className='success-msg'>{success}</p>
            }
        </div>
    );
};

export default SignUp;