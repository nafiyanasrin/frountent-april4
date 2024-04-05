import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'nafiiyaa' }); 
    navigator('/login')
  }
  
  return (
    
    <div style={{backgroundImage:`url(home.jpeg)`,justifyContent: 'center',backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"810px",width:"1700px",}}>
      <center>   
          <h1>Welcome, </h1>
          <p>This is your home page.</p>
          <button onClick={logout}>logout</button>
        </center>
    </div>
  );
};

export default Home;
