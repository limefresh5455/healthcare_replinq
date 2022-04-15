import React from "react";
import { Link } from "react-router-dom";


const AdminLeftMenu = () => {
    return (

<>

  <div className="offcanvas-header">
           
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas">X</button>
         </div>
         <div className="offcanvas-body leftmenuwrap">
         <ul>
            <li>
              
                <Link to="/calendar">               
                <h4> <i className='fa fa-user-md'></i> Calendar</h4>
            </Link>
            </li>
            <li>
            <Link to="/physicians">               
                <h4> <i className='fa fa-user-md'></i> Physicians</h4>
            </Link>
            </li>
            <li>
            <Link to="/admin">                 
                <h4><i className='fa fa-dashboard'></i> Dashboard</h4>
            </Link>
            </li>
            <li>
            <Link to="/notification">                
                <h4><i className='fa fa-bell'></i> Notifications</h4>
            </Link>
            </li>
            <li>
            <Link to="/profile">                
                <h4><i className='fa fa-user'></i> Profile</h4>
            </Link>
            </li>
        </ul>
        <ul>
            <li>
            <a href='#'>                
                <h4><i className='fa fa-sign-out'></i> Logout</h4>
                </a>
            </li>
        </ul>  
          
            
         </div>

</>

)
};

export default AdminLeftMenu;