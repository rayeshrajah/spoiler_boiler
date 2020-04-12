import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'

export default function Navbar(){
    const [display, setDisplay] = useState(false)
    function signup(){
        if(display){
         return setDisplay(false)
        }
        return setDisplay(true)
    }
    return(
    <div>
    <nav className="navbar nav" id="navbar">
    <a className="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a><Button login onClick={console.log('')}>Login</Button></a>
    <a><Button signup onClick={signup}>Sign-up</Button></a>
    </div>
    </nav>
    {display && <SignupForm />}
    </div>
    );
}
