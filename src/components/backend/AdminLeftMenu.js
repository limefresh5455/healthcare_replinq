import React from "react";
import { NavLink } from "react-router-dom";
import authService from '../../services/authService';

const AdminLeftMenu = () => {
    async function Logout() {
        new authService().logout().then(data => {
            if (data.success === true) {
                window.location.href = "/";
                localStorage.clear();
            }
          }
        );
    }
    return (

        <>
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas">X</button>
            </div>
            <div className="offcanvas-body leftmenuwrap">
                <ul>
                    <li>
                        <NavLink to="/calendar" activeClassName="active">
                            <i className='fa fa-user-md'></i> Calendar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/physicians" activeClassName="active">
                            <i className='fa fa-user-md'></i> Physicians
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" activeClassName="active">
                            <i className='fa fa-dashboard'></i> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification" activeClassName="active">
                            <i className='fa fa-bell'></i> Notifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <i className='fa fa-user'></i> Profile
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='#'>
                            <h4 onClick={Logout}><i className='fa fa-sign-out'></i> Logout</h4>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>

    )
};

export default AdminLeftMenu;