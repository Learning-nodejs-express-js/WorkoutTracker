import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css'; // Import CSS module

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, dispatch } = useAuthContext();
    const navigate = useNavigate();

    const eventHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        if(response.ok){
          const user = await response.json();
        
          dispatch({ type: "LOGIN", payload: user });
          localStorage.setItem("user", JSON.stringify(user));
        }
        else{
          const err=await response.json();
          console.log(err.error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <Navbar />
            <div className={styles.loginMiniContainer}>
            <h2 className={styles.loginTitle}>Sign Up Form</h2>
            <form className={styles.loginForm}>
                <label htmlFor="email" className={styles.loginLabel}>Email:</label><br/>
                <input type="email" id="email" name="email" required className={styles.loginInput} value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label htmlFor="password" className={styles.loginLabel}>Password:</label><br/>
                <input type="password" id="password" name="password" required className={styles.loginInput} value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Signup" className={styles.loginButton} onClick={(e) => eventHandler(e)}/>
            </form>
            </div>
        </div>
    );
};
