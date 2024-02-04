import { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import "./login.css"




const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const login = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch('http://localhost:3002/api/admins/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log(response.status)
  
      // Check if auth is not null before calling login method
      if (response.status === 200) {
        auth.login(username, password, true);
        navigate('/admin');
      } else {
        alert('Improper Email or Password');
      }
  
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  
    console.log('Form data submitted:', login);
  };
  

  return (
    <div className = "form-div">

      <div className="form-title">
        <h1>
          Admin Login
        </h1>
        <div className="line"></div>
      </div>

      <form className="form-main" onSubmit={handleSubmit}>

        <label>
          <h1>Username:</h1>
          <input
            type="text"
            className="username-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label>
          <h1>Password:</h1>
          <input
            type="password"
            className="password-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login


