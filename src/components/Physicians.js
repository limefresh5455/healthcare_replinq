import React, { useState, useEffect } from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';
import Configuration from '../config/config';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Physicians = () => {


  let arr = []
  let physici = []

  const [items, setItem] = useState([]);
  const [doctorname, setDoctorName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchPhysician, setSearchPhysician] = useState([]);
  const current_token = localStorage.getItem('access_token');
  function getAPI() {
    // console.warn()

    fetch('http://127.0.0.1:8000/api/listepic', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': 'Bearer ' + current_token,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          arr = data
          setItem(arr)
        })
      })

  }

  const searchNameAPI = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/searchepic/' + searchName, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json+fhir",
        'Authorization': 'Bearer ' + current_token,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setSearchPhysician(data)
        })
      })
  }

  useEffect(() => {
    getAPI();

    return () => {
      console.log("cleanup")
    }
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item.first_name)
    setSearchName(item.first_name)
  }

  const handleOnFocus = () => {
    //   console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.first_name}</span>
      </>
    )
  }
  return (

    <>
      <div className="offcanvas offcanvas-start" id="demo">
        <AdminLeftMenu />
      </div>

      <div className="rightpane mynotif">
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-md-8 text-center'>
              <img src="\images\physicianHero.png" width={'323'} alt='' />
              <h2>Welcome to the Replinq physician portal. Follow the prompts below to add physicians to your profile. Surgeon schedules will then be reflected in your live calendar.</h2>
            </div>
          </div>
          <div className='row justify-content-center mt-4'>
            <div className='col-md-8 text-center'>
              <form  >
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
                      fuseOptions={{ keys: ["first_name"] }}
                      resultStringKeyName="first_name"
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      formatResult={formatResult}
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button className='btn btn-physearch' type="text"
                      onClick={searchNameAPI}>Search</button>
                  </div>
                </div>
              </form>
              {searchPhysician.map((user) => (
                <div className='row mt-5'>

                  <div className='col-md-12'>
                    <div className="upschedulebox m-0">
                      <div className="uphdr">

                        <div className="dr-name phyname"><b>Dr.{user.full_name}</b> <span className='d-block text-start'>Radiologist</span></div>
                        {user.reference_id == user.doctor_id ?
                          <div className="ms-auto">
                            <a href='#' className='a-g-link' data-bs-toggle="modal" data-bs-target="#removephysicians">
                              <i className='fa fa-trash'></i> Remove
                            </a>
                          </div>
                          :
                          <div className="ms-auto">
                            <a href='#' className='a-g-link'><i className='fa fa-plus'></i> Add to Profile</a>
                          </div>
                        }

                        <div className="modal smallsize" id="removephysicians">
                          <div className="modal-dialog">

                            <div className="modal-content">
                              <div className="modal-body">
                                <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                                <div className='text-center'>
                                  <span class="warningIcon"><i class="fa fa-exclamation-triangle"></i></span>
                                </div>
                                <div className='row text-center'>

                                  <span><b>Are you sure you want to remove Dr. Sarah Jonas from your profile</b></span>
                                  <p>
                                    You will no longer receive notifications for Dr. Sarah Jonas
                                  </p>
                                </div>
                                <div className=' row text-center'>
                                  <div className=' col-md-6 text-center'>
                                    <input type='button' class='btn btn-primary w-100 removebtn' value='Cancel'></input>
                                  </div>
                                  <div className=' col-md-6 text-center'>
                                    <input type='button' class='btn btn-primary w-100' value='Confirm'></input>
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

              <div className='row mt-5 justify-content-end'>
                <div className='col text-end'>
                  <button className='btn btn-primary' type="button">Continue</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </>

  )

};

export default Physicians;
