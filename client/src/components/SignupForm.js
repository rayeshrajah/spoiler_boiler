import React, { useState } from 'react'
import '../styles/Form.scss'
import Button from './Button'
import axios from 'axios'

export default function SignupForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    function userInfo() {
        let userEmails = []
        axios.get('/users')
            .then(response => response.data.forEach(user => {
                userEmails.push(user.email)
            })).then(() => {
                if (!userEmails.includes(email) && email) {
                    return axios.post('/users', {
                        user: {
                            "name": name,
                            "email": email,
                            "password": password
                        }
                    }).then(() => {
                        return axios.get('/users')

                    }).then((response) => {
                       let newestUser = response.data[(response.data.length - 1)]
                        props.loggedIn(newestUser.id)
                        props.newUser({...props.oldUser, users: [...props.oldUser.users, newestUser]})
                        props.displayState(false)
                        props.displayButton(false)

                    })
                    .catch((error) => console.log(error))
                }
            })
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <section class="user-form">
                <div class="form-group">
                    <label for="username" class="name-label">Name:</label>
                    <input type="text"
                        class="form-control"
                        id="username"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div class="form-group">
                    <label for="InputEmail" class="email-label">Email address:</label>
                    <input type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="InputPassword" class="password-label">Password:</label>
                    <input type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button signup onClick={userInfo}>Submit</Button>
            </section>
        </form>);
}