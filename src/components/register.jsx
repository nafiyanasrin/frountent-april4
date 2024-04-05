import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit= async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
      <div style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundImage:`url(home.jpeg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"800px",width:"1700"}} >
      <h2>Register</h2>
      
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      
      <br></br>
     
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
     
      <br></br>
     
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      
      <br></br>
      
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
      <br></br>
      
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      
      <br></br>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
  };

export default Register;
