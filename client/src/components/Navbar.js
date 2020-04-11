import React from 'react'
import '../styles/Navbar.scss'
import Button  from './Button' 

export default function Navbar(props){
    return(
    <nav class="navbar navbar-light bg-light" id="navbar">
    <a class="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a><Button login onClick={props.login}>Login</Button></a>
    <a><Button signup onClick={props.signup}>Sign-up</Button></a>
    </div>
    </nav>
    );
}
