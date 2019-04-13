import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const navbar = () => {
    return (
        <>
            <div className={classes.Nav}>
                <ul>
                    <li><Link to="/registeration">Registeration</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/products">All Products</Link></li>
                    <li><Link to="/addproducts">Add Products</Link></li>
                    <li><Link to="/productsperuser">My Products</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default navbar;