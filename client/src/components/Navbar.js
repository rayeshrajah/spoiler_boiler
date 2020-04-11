import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'

export default function Navbar(){
    const [click, setClick] = useState(false)
    function signup(){
        return setClick(true)
    }
    return(
    <div>
    <nav class="navbar navbar-light bg-light" id="navbar">
    <a class="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a><Button login onClick={console.log('')}>Login</Button></a>
    <a><Button signup onClick={signup}>Sign-up</Button></a>
    </div>
    </nav>
    {click && <SignupForm />}
    </div>
    );
}
