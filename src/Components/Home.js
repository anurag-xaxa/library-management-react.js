import React from "react";
import '../assets/Style/Home.css';
import Header from '../Components/Headers.js';
import Footer from "../Components/Footer.js";
import { Form, Container } from 'react-bootstrap';


const Home = () => { 
    
  return (
    <>
       <div className = "main-container" >
            <div><Header/></div>
       |<div className="form-container">
       <div className="login-form">
        <h3>Student Login</h3>
        <Container>
          <Form >
            <Form.Group controlId="Name">
              
              <Form.Control
                type="text"
                placeholder="Enter Name"
                
                />
            </Form.Group>
                <br/>
            <Form.Group controlId="Password">
            
              <Form.Control
                type="password"
                placeholder="Enter Password"
               
                />
            </Form.Group>
            <br/>
            <button
              type="submit"
              variant="primary"
              className="login-btn">
                Login
            </button>
            
          </Form>
        </Container>
      </div>
       </div>
       </div>
       <div><Footer/></div>
       

        

    </>

  )
}

export default Home;