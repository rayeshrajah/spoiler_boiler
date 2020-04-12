import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Navbar(){
    const [displaySignup, setDisplaySignup] = useState(false)
    const [displayLogin, setDisplayLogin] = useState(false)
    function signup(){
        if(displaySignup){
         return setDisplaySignup(false)
        }
        return setDisplaySignup(true)
    }
    function login(){
        if(displayLogin){
            return setDisplayLogin(false)
           }
           return setDisplayLogin(true)
    }
    return(
    <div>
    <nav class="navbar nav" id="navbar">
    <a class="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a><Button login onClick={login}>Login</Button></a>
    <a><Button signup onClick={signup}>Sign-up</Button></a>
    </div>
    </nav>
    {displayLogin && <LoginForm />}
    {displaySignup && <SignupForm />}
    </div>
    );
}
