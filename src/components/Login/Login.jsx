import React, { useContext } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { error, success, setUser, loginWithEmailAndPass, setError, setSuccess } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailAndPass(email, password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            form.reset();
            setSuccess("Login SuccessFull");
            navigate("/");
        })
        .catch((error)=>{
            console.log(error.message);
            setError(error.message);
        })
        console.log(email, password);
    }
    return (
        <div className='form-container'>
            <h2 className="form-title">Log in</h2>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email" />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required placeholder="Enter Your Password" />
                </div>
                <input className="btn-submit" type="submit" value="Submit" />
            </form>
            <p><small>New to Ema-john? <Link to="/signUp">Create New Account</Link></small></p>
            {
                error && <p className='error-msg'>{error}</p>
            }
            {
                success &&  <p className='success-msg'>{success}</p>
            }
        </div>
    );
};

export default Login;