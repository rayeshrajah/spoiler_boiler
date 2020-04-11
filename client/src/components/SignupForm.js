import React from 'react'
import '../styles/SignupForm.scss'
import Button from './Button'

export default function SignupForm(){
    return (
    <form>
    <section id= "signup-form">
    <div class="form-group">
    <label for="username" class="name-label">Name:</label>
    <input type="text" class="form-control" id="username"/>
    </div>
    <div class="form-group">
    <label for="InputEmail" class="email-label">Email address:</label>
    <input type="email" class="form-control" id="EmailInput"/>
    </div>
    <div class="form-group">
    <label for="InputPassword" class="password-label">Password:</label>
    <input type="password" class="form-control" id="PasswordInput"/>
    </div>
    <Button signup type="submit">Submit</Button>
    </section>
    </form>);
}