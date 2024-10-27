import { useState } from "react";
import styles from './LoginPage.module.css';
import User from "../types/User";

/**
 * A component that renders the Login page
 * Contains state for the current user
 * Simple enough page to be contained in a single component
 * @returns {JSX.Element}
 */
function LoginPage() {

    const [user, setUser] = useState<User>({ username: '', password: '' });

    return (
        <div className={`${styles['page-wrapper']}`}>
            <h1>Welcome!</h1>
            <p>Welcome to dashboard pages. May I take your username and password?</p>
            <form action="/dashboard" className={`${styles['form-wrapper']} card`}>
                <div className={styles['input-wrapper']}>
                    <input type="text"
                        id='login-username'
                        autoComplete='on'
                        placeholder="Username"
                        value={user.username}
                        required
                        minLength={1}
                        onInput={(e) => { setUser((prev: User) => { return { ...prev, ...{ username: (e.target as HTMLInputElement).value } } }) }}></input>
                </div>
                <div className={styles['input-wrapper']}>
                    <input type="password"
                        id='login-password'
                        autoComplete='off'
                        placeholder="Password"
                        value={user.password}
                        required
                        minLength={1}
                        onInput={(e) => { setUser((prev: User) => { return { ...prev, ...{ password: (e.target as HTMLInputElement).value } } }) }}></input>
                </div>
                <div className={styles['input-wrapper']}>
                    <button type="submit" disabled={user?.username.length < 1 || user?.password.length < 1} onClick={() => { console.debug('here we go!') }}>Login</button>
                </div>
            </form >
        </div >
    )
}

export default LoginPage;