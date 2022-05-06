import React, { useEffect, useState } from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom"
//import { adddDays } from 'date-fns'

const Schedule = () => {
  // const tomorrow = addDays(date, 2);
  // console.log(tomorrow);
  //  console.log(info.event.title)
  const [name, setName] = useState("");
  const [scheduledate, setScheduleDate] = useState("");
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  let eventObject;
  let resObject;
  useEffect(() => {

    eventObject = JSON.parse(localStorage.getItem('event'));
    // console.log(resObject);
    console.log(eventObject);
    // console.log(eventObject.title);
    setName(eventObject.full_name);
    setScheduleDate(eventObject.start_date);
    setStartTime(eventObject.start_time);
    setEndTime(eventObject.end_time);
  }, []);


  const { info } = useParams()


  return (
    <>
      <div className="offcanvas offcanvas-start" id="demo">
        <AdminLeftMenu />
      </div>
      <div className="rightpane">
        <div className='container'>
          <div className="row justify-content-center">
            <h6>Novemeber 22,2020</h6>
            <p>{ }</p>
            <div className="col-md-2 avatarwrap">
              <div className="avname">
                <h2>SJ</h2>
                <span className="avedit"> <a href='#' className='a-g-link' data-bs-toggle="modal" data-bs-target="#removephysicians"><i className="fa fa-pencil"></i></a></span>
              </div>
              <h6 className='text-center' for="disabledFieldsetCheck">Dr. {name}</h6>
            </div>
            {/* <div className="col-md-2 avatarwrap">
              <div className="avname1">
                <h2>SJ</h2>
                <span class="avedit"> <a href='#' className='a-g-link' data-bs-toggle="modal" data-bs-target="#removephysicians"><i class="fa fa-pencil"></i></a></span>
              </div>
              <h6 className='text-center' for="disabledFieldsetCheck">Dr. Sarah Jonas</h6>
            </div> */}

            <div className="modal smallsize" id="removephysicians">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button type="button" className="btn-close loginmdl" data-bs-dismiss="modal"></button>
                    <div className='row'>
                      <div className='modalWrap'>
                        <div className='removehdr'>
                          <a href='#' className='active'>Color</a>
                          <a href='#'>Notifications</a>
                        </div>
                        <div className='addmodalbdy'>
                          <h4>Physician</h4>
                          <div className="dr-name p-0 d-flex">
                            <div className='addnamephy'>
                              <b><span className="dot-box2"></span> Dr. Sarah Jonas </b>
                              <span>(Radiologist)</span>
                            </div>
                          </div>
                          <div className='colorbox'>
                            <h4>Color</h4>
                            <div className='selctClr'>
                              <div>
                                <input id="radio-1" class="radio-custom" name="radio-group" type="radio" />
                                <label for="radio-1" class="radio-custom-label rc1"></label>
                              </div>
                              <div>
                                <input id="radio-2" class="radio-custom" name="radio-group" type="radio" />
                                <label for="radio-2" class="radio-custom-label rc2"></label>
                              </div>
                              <div>
                                <input id="radio-3" class="radio-custom" name="radio-group" type="radio" />
                                <label for="radio-3" class="radio-custom-label rc3"></label>
                              </div>

                              <div>
                                <input id="radio-4" class="radio-custom" name="radio-group" type="radio" />
                                <label for="radio-4" class="radio-custom-label rc4"></label>
                              </div>
                              <div>
                                <input id="radio-5" class="radio-custom" name="radio-group" type="radio" checked />
                                <label for="radio-5" class="radio-custom-label rc5"></label>
                              </div>
                              <div>
                                <input id="radio-6" class="radio-custom" name="radio-group" type="radio" />
                                <label for="radio-6" class="radio-custom-label rc6"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='text-center'>
                          <input type='button' class='btn btn-primary w-100' value='Update'></input>
                          <span className='linebreak'>OR</span>
                          <input type='button' class='btn btn-primary w-100 removebtn' value='Remove from Profile'></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="schedule-boxleft">
                    <div className="yearbox" style={{ "background-color": "#F4F1DE", "border-bottom": "0px" }}>
                      <h2>Schedule</h2>
                      <h2 style={{ "color": "#e28563" }}>Nov, 11 2020</h2>
                      <span><a href="#" className="me-4 text-dark"><i className="fa fa-chevron-left"></i></a>
                        <a href="#" className="text-black"><i className="fa fa-chevron-right"></i></a></span>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2"><p style={{ "margin-left": "20px" }}>{starttime} AM</p></div>
                      <div className="col-md-10">
                        <div className="upschedulebox bdrleft mb-4">
                          <div className="uphdr">
                          </div>
                          <div className="myphy-boxleft">
                            <div className='row'>
                              <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
                              <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
                              <div className="col-2 upcom-time ms-auto">{starttime}-{endtime} am</div>
                              <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
                              <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2"><p style={{ "margin-left": "20px" }}>9:00 AM</p></div>
                      <div className="col-md-10">
                        <div className="upschedulebox bdrleft mb-4">
                          <div className="uphdr">
                          </div>
                          <div className="myphy-boxleft">
                            <div className='row'>
                              <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
                              <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
                              <div className="col-2 upcom-time ms-auto">8 - 10:30am</div>
                              <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
                              <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2"><p style={{ "margin-left": "20px" }}>10:00 AM</p></div>
                      <div className="col-md-10">
                        <div className="upschedulebox bdrleft mb-4">
                          <div className="uphdr">
                          </div>
                          <div className="myphy-boxleft">
                            <div className='row'>
                              <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
                              <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
                              <div className="col-2 upcom-time ms-auto">8 - 10:30am</div>
                              <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
                              <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )


};
export default Schedule;
