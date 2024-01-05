import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Footer from '../Footer';
import './Sidebar.css';

const AdminSidebar = () => {
  return (
    <>
    {/* <h1 className='heading'>Admin Dashboard </h1> */}
    <div className='container'>
      <div id="sidebar">
      <ul id="sidebar-nav">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/activities">Activities</Link></li>
        <li><Link to="/admin/students">Students</Link></li>
        <li><Link to="/admin/books">Books</Link></li>
        <li><Link to="/admin/issue">Issue Book</Link></li>
        <li><Link to="/admin/loans/current">Books Issued</Link></li>
        <li><Link to="/admin/loans/previous">Books returned</Link></li>
        <li><Link to="/admin/profile">My Profile</Link></li>
        <li><Link to="/auth/admin-logout" className="btn">Logout</Link></li>
      </ul>
    </div>
    <div className='card1'>
    <Card/>
    </div>
    <div className='card2'>
    <Card/>
    </div>
    <div className='card3'>
    <Card/>
    </div>
    <div className='card4'>
    <Card/>
    </div>

    </div>
     
        <div>
             <Footer/>
        </div>
    
        
        
    </>
  );
};

export default AdminSidebar;
