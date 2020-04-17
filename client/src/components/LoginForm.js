import React, {useState, useEffect} from "react";
import axios from 'axios'
import Button from './Button'
import '../styles/Form.scss'

export default function LoginForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userInfo, setUserInfoFound] = useState(false)
  
  useEffect(()=>{
    axios.get('/users')
         .then( (response) => {
             let data = response.data
             data.forEach(element => {
                 if(element.email === email && element.password === password){
                   setUserInfoFound(true)
                   props.loggedIn(element.id)
                 }
                });
            })
            .catch(error => console.log(error))
        })
        
    function userInfoFound(){
        if(userInfo){
        props.displayState(false)
        return props.displayButton(false)
      }
  }

  return (
    <form onSubmit = {(event) => event.preventDefault()}>
    <section className="user-form">
      <div class="form-group">
        <label for="InputEmail" class="email-label">
          Email address:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="InputPassword" class="password-label">
          Password:
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
       <Button login onClick={userInfoFound}>
        Submit
      </Button>
    </section>
    </form>
  );
}
