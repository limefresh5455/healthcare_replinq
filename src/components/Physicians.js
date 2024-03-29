import React, { useState, useEffect } from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { ToastContainer } from 'react-toastify';
import toaster from '../helpers/toaster';
import physicianService from '../services/physicianService';
import { useOutletContext,Link } from "react-router-dom";

const current_token = localStorage.getItem('access_token');
const Physicians = () => {
  const [userData] = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItem] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [SearchUserId, setSearchUserId] = useState("");
  const [searchPhysician, setSearchPhysician] = useState([]);

  function getPhysicianList() {
    new physicianService().getPhysicianList().then(data => {
        setItem(data)
      }
    );
  }

  const searchPhysicianList = () => {
    new physicianService().searchPhysicianList(searchName,userData.id).then(data => {
        setSearchPhysician(data)
      }
    );
  }

  useEffect(() => {
    getPhysicianList();
    return () => {
      console.log("cleanup")
    }
  }, []);

  const handleOnSearch = (string, results) => {}
  const handleOnHover = (result) => {}
  const handleOnSelect = (item) => {
    setSearchName(item.full_name)
  }
  const handleOnFocus = () => {}
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.full_name}</span>
      </>
    )
  }
  function deleteUser(user)
  {  
   
    new physicianService().deletePhysicianByMr(user).then(data => {
       if (data.success === true) {
        searchPhysicianList();  
        setSearchName(user.full_name)
        new toaster().successMessage(data.message);
      } else if (data.success === false) {
        if (data.message.message) {
    
          new toaster().errorMessage(data.message.message);
        }
      }   
    }
  );
  }

  function AddUser(user_data)
  {

    new physicianService().AddPhysicianByMr(user_data).then(data => {
        //console.log(data.result);
      if (data.success === true) {
        searchPhysicianList();  
        setSearchName(user_data.full_name)
       new toaster().successMessage(data.message);
     } else if (data.success === false) {
       if (data.message.message) {
         new toaster().errorMessage(data.message.message);

       }
     }
   
    }
    ); 
  }

  return (
    <>
       <ToastContainer />
      <div className="offcanvas offcanvas-start" id="demo">
        <AdminLeftMenu />
      </div>
      <div className="rightpane mynotif">
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-md-8 text-center'>
              <img src="\images\physicianHero.png" width={'323'} alt='img-test' />
              <h2>Welcome to the Replinq physician portal. Follow the prompts below to add physicians to your profile. Surgeon schedules will then be reflected in your live calendar.</h2>
            </div>
          </div>
          <div className='row justify-content-center mt-4'>
            <div className='col-md-8 text-center'>
                <div class="row">
                  <div class="col-4 col-md-5">
                    <select class="form-select">
                      <option>Select State</option>
                      <option>State 1</option>
                      <option>State 2</option>
                      <option>State 3</option>
                    </select>
                  </div>
                  <div class="col-4 col-md-5">
                    {/* <input type="text"
                      class="form-control" 
                      placeholder="Type Physician Name"
                      name="" /> */}
                    <ReactSearchAutocomplete
                      items={items}
                      fuseOptions={{ keys: ["full_name"] }}
                      resultStringKeyName="full_name"
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      formatResult={formatResult}
                      placeholder="Type Physician Name"
                      styling={
                        {
                          height: "36px",
                          border: "1px solid #ddd",
                          borderRadius: "0px",
                          backgroundColor: "white",
                          boxShadow: "rgba(32, 33, 36, 0.28) 0px 0px 0px 0px"
                        }
                      }
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button className='btn btn-physearch' type="button"
                     onClick={searchPhysicianList} disabled={(searchName != "") ? false : true}>Search</button>
                  </div>
                </div>
              {searchPhysician.map((user, index) => (
                <div className='row mt-5' key={index}>
                  <div className='col-md-12'>
                    <div className="upschedulebox m-0">
                      <div className="uphdr">
                        <div className="dr-name phyname"><b>Dr.{user.full_name}</b> <span className='d-block text-start'> Radiologist</span></div>
                        {user.doctor !== null ?
                          <div className="ms-auto">
                            <Link to='#' className='a-g-link' 
                            data-bs-toggle="modal" 
                            data-bs-target="#removephysicians" >
                              <i className='fa fa-trash'></i> Remove
                            </Link>
                          </div>
                          :
                          <div className="ms-auto">
                            <Link to='#' className='a-g-link'  onClick={()=>{ AddUser(user)}}>
                              <i className='fa fa-plus'></i> Add to Profile
                            </Link>
                          </div>
                        }
                        {console.log("check condition "+user.doctor)}
                        <div className="modal smallsize" id="removephysicians">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                                <div className='text-center'>
                                  <span class="warningIcon"><i class="fa fa-exclamation-triangle"></i></span>
                                </div>
                                <div className='row text-center'>
                                  <span><b>Are you sure you want to remove Dr. {user.full_name} from your profile</b></span>
                                  <p>
                                    You will no longer receive notifications for Dr. {user.full_name}
                                  </p>
                                </div>
                                <div className=' row text-center'>
                                  <div className=' col-md-6 text-center'>
                                    <input type='button' data-bs-dismiss="modal" class='btn btn-primary w-100 removebtn' value='Cancel'></input>
                                  </div>
                                  <div className=' col-md-6 text-center'>
                                    <input type='button' data-bs-dismiss="modal" class='btn btn-primary w-100'  onClick={()=>deleteUser(user)} value='Confirm'></input>
                                    {/* <button>{JSON.stringify(user)}</button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myphy-boxleft text-start phyaddprfile">
                        <div className='row'>
                          <div className='col-1 text-end mb-3'><i className="fa fa-building"></i></div>
                          <div className='col-11 mb-3 ps-0'>Northshore Skokie Hospital</div>
                          <div className='col-1 text-end'><i className="fa fa-building"></i></div>
                          <div className='col-11 ps-0'>Saint Francis Hospital</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*<div className='row mt-5 justify-content-end'>
                <div className='col text-end'>
                  <button className='btn btn-primary' type="button">Continue</button>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Physicians;
