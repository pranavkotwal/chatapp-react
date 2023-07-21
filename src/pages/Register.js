import React from 'react';
import styles from '../styles/register.module.css'

const Register = () => {
    return ( 
    <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
            <span className={styles.logo} >pchat</span>
            <span className={styles.title} >Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder='email'/>
                <input type="text" placeholder='"password'/>
                <input style={{display:'none'}}type="file" id="file"/>
                <label htmlFor="file">
                    <img src="https://cdn-icons-png.flaticon.com/32/10054/10054290.png" alt="" />
                    <span>Add avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Have an account already? Login</p>
        </div>


    </div>
    )
}



export default Register;