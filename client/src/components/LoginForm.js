import React, {useState, useEffect} from "react";
import Button from './Button'
import '../styles/Form.scss'

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <section class="user-form">
      <div class="form-group">
        <label for="InputEmail" class="email-label">
          Email address:
        </label>
        <input
          type="email"
          class="form-control"
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
      <Button login onClick={console.log("")}>
        Submit
      </Button>
    </section>
  );
}
