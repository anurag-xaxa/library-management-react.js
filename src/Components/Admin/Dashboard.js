import React from 'react';
import "../../assets/Style/Home.css"
// import Card from './Card';
import Sidebar from './Sidebar';


const Dashboard = () => {
  return (
        <> 
        <div><h1 className='heading'>Admin Dashboard </h1></div>
    <div>   
      <Sidebar/>
    </div>
    
    

      </>

  );
};

export default Dashboard;
