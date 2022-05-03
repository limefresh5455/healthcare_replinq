import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminLeftMenu = () => {
    let token = localStorage.getItem('access_token')
   // console.log(token)
    async function Logout(data) {
        let result = await fetch("http://127.0.0.1:8000/api/logout", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "authorization": "Bearer " + token
            },
        });
        result = await result.json();
        if (result.success === true) {
            toast.success(result.success, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
            });
            window.location.href = "/";
            localStorage.clear();
        } else {
            if (result.message.message) {
                toast.error(result.message.message[0], {
                    position: "top-right",
                    autoClose: 3000,
                    closeOnClick: true,
                });
            }
        }
    }
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
                        <Link to='#'>
                            <h4 onClick={Logout}><i className='fa fa-sign-out'></i> Logout</h4>
                        </Link>
                    </li>
                </ul>
            </div>

        </>

    )
};

export default AdminLeftMenu;