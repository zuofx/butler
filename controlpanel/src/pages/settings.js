import { useAuth } from '../Auth/AuthContext.js'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Settings = () => {
    const auth = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        const handleTechniques = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/admins/get');
                const data = await response.json();
                console.log(data)
                setUsername(data[0]["username"]);
                setPassword(data[0]["password"]);
                console.log(username);
                console.log(password);
            } catch (error) {
                console.error('Error fetching techniques:', error);
            }
        }
      
        handleTechniques();
      }, []);

    const handleLogout = (event) => {
        auth.logout()
        navigate("/login")
    }

    
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    return (
    <div>
        fwe
    </div>
  )
}

export default Settings