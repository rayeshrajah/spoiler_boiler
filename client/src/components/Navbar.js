import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Button  from './Button'  
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import UserStats from './UserStats'

export default function Navbar(props){
    const [displaySignup, setDisplaySignup] = useState(false)
    const [displayLogin, setDisplayLogin] = useState(false)
    const [buttonDisplay, setButtonDisplay] = useState(true)
    const [userStats, setUserStats] = useState(false)
    
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
        setUserStats(false)
    }
    function showUserStats(){
        setUserStats(!userStats)
    }
    

    return(
    <div>
    <nav className="navbar nav" id="navbar">
    <a className="navbar-brand" id="logo-text">SpoilerBoiler</a>
    <div id="nav-user-info">
    <a>{!buttonDisplay && <Button signup onClick={showUserStats}>Stats</Button>}</a>
    <a>{!buttonDisplay && <Button logout onClick={logout}>Logout</Button>}</a>
    <a>{buttonDisplay && <Button login onClick={login}>Login</Button>}</a>
    <a>{buttonDisplay && <Button signup onClick={signup}>Sign-up</Button>}</a>
    </div>
    </nav>
    {displayLogin && !displaySignup && <LoginForm displayButton={setButtonDisplay} displayState={setDisplayLogin} loggedIn={props.loggedIn}/>}
    {displaySignup && !displayLogin && <SignupForm displayButton={setButtonDisplay} displayState={setDisplaySignup} loggedIn={props.loggedIn} newUser={props.newUser} oldUser={props.oldUser}/>}
    {userStats &&  <UserStats userId={props.userId} comments={props.comments}/>}
    </div>
    );
}
