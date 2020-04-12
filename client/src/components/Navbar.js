import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Navbar(){
    const [displaySignup, setDisplaySignup] = useState(false)
    const [displayLogin, setDisplayLogin] = useState(false)
    const [buttonDisplay, setButtonDisplay] = useState(true)
    
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
    function logout(){
        setButtonDisplay(true)
    }
    

    return(
    <div>
    <nav class="navbar nav" id="navbar">
    <a class="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a>{!buttonDisplay && <Button logout onClick={logout}>Logout</Button>}</a>
    <a>{buttonDisplay && <Button login onClick={login}>Login</Button>}</a>
    <a>{buttonDisplay && <Button signup onClick={signup}>Sign-up</Button>}</a>
    </div>
    </nav>
    {displayLogin && <LoginForm displayButton={setButtonDisplay} displayState={setDisplayLogin}/>}
    {displaySignup && <SignupForm displayButton={setButtonDisplay} displayState={setDisplaySignup}/>}
    </div>
    );
}
