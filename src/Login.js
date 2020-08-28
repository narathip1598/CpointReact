import React from 'react';
import auth from './Fire';

auth.signInWithEmailAndPassword(username, password)

const Login = () => {
    return(
        <div>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="button">Login</button>
        </div>
    )
}

export default Login