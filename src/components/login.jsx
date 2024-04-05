import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
  

    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",backgroundImage:`url(home.jpeg)`,backgroundRepeat:"np-repeat",backgroundSize:"cover",height:"800px",width:"1500px"}}>
    
      <h2>Login</h2>
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
      <button onClick={handleSubmit}>Login</button> 
      <br></br><br></br>
      <button onClick={redirecter}>Signin</button> 
    
  
    </div>
  );
};

export default Login;
