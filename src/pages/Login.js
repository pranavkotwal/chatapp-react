import React from 'react';
import styles from '../styles/register.module.css'

const Login = () => {
    return ( 
    <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
            <span className={styles.logo} >pchat</span>
            <span className={styles.title} >Login</span>
            <form>

                <input type="email" placeholder='email'/>
                <input type="text" placeholder='"password'/>

               
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>


    </div>
    )
}



export default Login;