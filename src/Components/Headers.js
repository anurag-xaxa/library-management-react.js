// Header.js
import React from 'react';
import "../assets/Style/Headers.css"
// import Registration from '../Components/RegisterForm'

const Headers = () => {
  
  return (
    <div className="app-header">
      <div className="nav-links">
        <a className = "nav-items" href="#home">Home |</a> 
        <a className = "nav-items"  href="#features">Features |</a> 
        <a className = "nav-items" href="#contact">Contact |</a> 
        <a className = "nav-items" href= "#">New Registration</a>
      </div>
    </div>
  );
};

export default Headers;
