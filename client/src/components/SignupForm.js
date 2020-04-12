import React, { useState } from 'react'
import '../styles/SignupForm.scss'
import Button from './Button'
import axios from 'axios'

export default function SignupForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function userInfo(){
     return axios.post('/users', {
         user: {
             "name": name,
             "email": email,
             "password": password
         }
     }).then((response) => console.log(response))
       .catch((error) => console.log(error))
    }
    console.log(name)
    console.log(email)
    console.log(password)
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
           onChange={(event) => setName(event.target.value)}/>
    </div>
    <div class="form-group">
    <label for="InputEmail" class="email-label">Email address:</label>
    <input type="email" 
           class="form-control" 
           id="EmailInput"
           name="email" 
           value={email}
           onChange={(event) => setEmail(event.target.value)}  
           />
    </div>
    <div class="form-group">
    <label for="InputPassword" class="password-label">Password:</label>
    <input type="password" 
           class="form-control" 
           id="PasswordInput"
           name="password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
           />
    </div>
    <Button signup onClick={userInfo}>Submit</Button>
    </section>
    </form>);
}