import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut, setError, setSuccess} = useContext(AuthContext);

    const handleSignOut = ()=>{
        logOut()
        .then((result)=>{
            setSuccess("Successfully Sign out")
        })
        .catch((err)=>{
            console.log(err);
            setError(err.message);
        })
    }
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
                {
                    user && <span style={{color:"white", marginLeft: "10px"}}>{user.email} <button onClick={handleSignOut}>Sign out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;