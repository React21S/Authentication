import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

import React from 'react';

const Navbar = () => {
    const {logout} = Logout();
    const {user}= useAuthContext();
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}><Link to="/">MoySemTol Software</Link></li>
                {!user && (
                <>
                <li><Link to="login">Login</Link></li>
                <li><Link to="signup">SignUp</Link></li>
                </>
                )}
                {user && (
                    <>
                    <li>hello, {user.displayName}</li>
                <li><button className="btn" onClick={logout}>Logout</button></li>
                </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;