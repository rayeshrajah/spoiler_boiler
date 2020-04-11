import React, { useState, useEffect } from 'react'
import '../styles/SignupForm.scss'
import Button from './Button'
import axios from 'axios'

export default function SignupForm(props){
    const [info, setInfo] = useState({name: "", email: "", password: "" })
    const {name, email, password} = info
    function userInfo(){
     return axios.post('/users', {
         headers: {"Content-Type": "application/json"},
         data: {
             "name": "ray",
             "email": "ray@something.com",
             "password": "secret"
         }
     })
                 .then((response) => console.log(response.data))
                 .catch((error) => console.log(error))
    }
    console.log(info)
    return (
    <form onSubmit = {(event) => event.preventDefault()}>
    <section id= "signup-form">
    <div class="form-group">
    <label for="username" class="name-label">Name:</label>
    <input type="text" 
           class="form-control" 
           id="username" 
           name="name"
           value={name} 
           onChange={(event) => setInfo(event.target.value)}/>
    </div>
    <div class="form-group">
    <label for="InputEmail" class="email-label">Email address:</label>
    <input type="email" 
           class="form-control" 
           id="EmailInput"
           name="email" 
           value={email}
           onChange={(event) => setInfo(event.target.value)}  
           />
    </div>
    <div class="form-group">
    <label for="InputPassword" class="password-label">Password:</label>
    <input type="password" 
           class="form-control" 
           id="PasswordInput"
           name="password"
           value={password}
           onChange={(event) => setInfo(event.target.value)}
           />
    </div>
    <Button signup onClick={userInfo}>Submit</Button>
    </section>
    </form>);
}