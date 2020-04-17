import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Navbar(props){
    const [displaySignup, setDisplaySignup] = useState(false)
    const [displayLogin, setDisplayLogin] = useState(false)
    const [buttonDisplay, setButtonDisplay] = useState(true)
    
    function signup(){
        if(displaySignup){
            setDisplaySignup(false)
        } else {
            setDisplayLogin(false)
            setDisplaySignup(true)
        }
    }
    function login(){
        if(displayLogin){
            setDisplayLogin(false)
        } else {
            setDisplaySignup(false)
            setDisplayLogin(true)
        }
    }
    function logout(){
        setButtonDisplay(true)
    }
    

    return(
    <div>
    <nav className="navbar nav" id="navbar">
    <a className="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a>{!buttonDisplay && <Button logout onClick={logout}>Logout</Button>}</a>
    <a>{buttonDisplay && <Button login onClick={login}>Login</Button>}</a>
    <a>{buttonDisplay && <Button signup onClick={signup}>Sign-up</Button>}</a>
    </div>
    </nav>
    {displayLogin && !displaySignup && <LoginForm displayButton={setButtonDisplay} displayState={setDisplayLogin} loggedIn={props.loggedIn}/>}
    {displaySignup && !displayLogin && <SignupForm displayButton={setButtonDisplay} displayState={setDisplaySignup}/>}
    </div>
    );
}
