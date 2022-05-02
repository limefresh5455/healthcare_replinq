import React from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';


const Admin = () => {
    return (
    
    <>
    <div className="offcanvas offcanvas-start" id="demo">
       <AdminLeftMenu />
      </div>
      
      <div className="rightpane">
                <div className="container">
                    <div className="welcombox">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="mt-4">Hey Racheal, Good Morning <img src="/images/sunimg.png"/></h1>
                                <h2>Welcome to your Replinq dashboard. View case insights below, edit your physicians and preview your next upcoming case.
                                </h2>
                                <h3>
                                   <i className="fa fa-calendar"></i> Friday 11th November, You got 1 upcoming schedule
                                </h3>
                            </div>
                            <div className="col-md-6 text-end">
                                <img src="/images/welcomeImg.png"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                                          
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="schedule-boxleft">
                                <div className="yearbox">
                                    <h2>My Physicians (5)</h2>
                                    <span><a href="#" className="me-4 text-dark"><i className="fa fa-chevron-left"></i></a>
                                    <a href="#" className="text-black"><i className="fa fa-chevron-right"></i></a></span>
                                </div>
                                <img src="/images/year-chart-left.png" />
                                <div className="yearboxfooter">
                                    <span></span> Physicians
                                    <span></span> My Schedules
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                    
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="schedule-boxleft">
                                <div className="yearbox">
                                    <h2>Upcoming Schedules (1)</h2>                                   
                                </div>
                                
                                <div className="upschedulebox bdrleft">
                                    <div className="uphdr">
                                        <div className="dot-box"></div>
                                        <div className="dr-name p-0"><b>Dr. Sarah Jonas </b><span>(Radiologist)</span></div>
                                        <div className="upcom-time ms-auto">8 - 10:30am</div>
                                    </div>

                                     <div className="myphy-boxleft">
                                        <div className='row'>
                                            <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
                                            <div className='col-11 mb-3 ps-0'>Saint Francis Hospital</div>

                                            <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
                                            <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacromial decompression, rotator cuff repair</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                
              
                        </div>
                        <div className='col-md-5'>
                        <div className="schedule-boxleft">
                                <div className="yearbox">
                                    <h2>Yearly Schedules Insight</h2>
                                    <span><a href="#" className="me-4 text-dark addphy" data-bs-toggle="modal" data-bs-target="#addphysicians"><i className="fa fa-plus"></i> <b className='d-none d-lg-inline'>Add Physicians</b></a>
                                        
                                    </span>

                                    <div className="modal smallsize" id="addphysicians">
                                        <div className="modal-dialog">
                                            <div className="modal-content"> 
                                                    <div className="modal-body">
                                                    <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                                                        <div className='row'>
                                                         <div className='modalWrap'>
                                                            <div className='addmodalHeader'>
                                                             <div className='addpypagi active'>
                                                                <span>1</span>
                                                                 <p>Color</p>
                                                             </div>
                                                             <div className='addpypagi'>
                                                                <span>2</span>
                                                                 <p>Notifications</p>
                                                             </div>

                                                            </div>

                                                            <div className='addmodalhero'>
                                                            <img src="/images/add-physician-hero.png" width={292} />
                                                             <h3>Choose a Color</h3>
                                                             <p>
                                                                 Select a color to help you identify the physician throughout the app
                                                             </p>
                                                                
                                                            </div>
                                                            <div className='addmodalbdy'>
                                                                <h4>Physician</h4>
                                                                
                                                                <div class="dr-name p-0 d-flex">
                                                                
                                                                <div className='addnamephy'>                                                                
                                                                <b><span class="dot-box2"></span> Dr. Sarah Jonas </b>
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
                            <input id="radio-2" class="radio-custom"name="radio-group" type="radio" />
                            <label for="radio-2" class="radio-custom-label rc2"></label>
                        </div>
                        <div>
                            <input id="radio-3" class="radio-custom" name="radio-group" type="radio" />
                            <label for="radio-3" class="radio-custom-label rc3"></label>
                        </div>

                        <div>
                            <input id="radio-4" class="radio-custom" name="radio-group" type="radio"  />
                            <label for="radio-4" class="radio-custom-label rc4"></label>
                        </div>
                        <div>
                            <input id="radio-5" class="radio-custom"name="radio-group" type="radio" checked />
                            <label for="radio-5" class="radio-custom-label rc5"></label>
                        </div>
                        <div>
                            <input id="radio-6" class="radio-custom" name="radio-group" type="radio" />
                            <label for="radio-6" class="radio-custom-label rc6"></label>
                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                           <div className='text-center'><input type='button' class='btn btn-primary' value='Confirm'></input></div> 
                                                            </div>

                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                   





                                </div>

                                <ul className="list-group addphylist">
                                    <li className="list-group-item d-flex justify-content-between align-items-top">
                                        <b><small className='dotdr violt'></small> Dr. Sarah Jonas <span className='drspec'>Radiologist</span></b>
                                        <a href='#'><span className="badge"><i className="fa fa-pencil"></i></span></a>
                                            
                                    </li>
                                    <li className='list-group-item'>
                                            <div className='facilitybox'>
                                                <span><i className='fa fa-building'></i></span>
                                                <span>Facility - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                                            </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-top">
                                        <b><small className='dotdr orng'></small> Dr. Alvis Hay <span className='drspec'>Cardiologist</span></b>
                                        <a href='#'><span class="badge"><i className="fa fa-pencil"></i></span></a>
                                    </li>
                                    <li className='list-group-item'>
                                            <div className='facilitybox'>
                                                <span><i className='fa fa-building'></i></span>
                                                <span>Facility - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                                            </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-top">
                                        <b><small className='dotdr red'></small> Dr. Megan Stweard <span className='drspec'>Neuro Physician</span></b>
                                        <a href='#'><span className="badge"><i className="fa fa-pencil"></i></span></a>
                                    </li>
                                    <li className='list-group-item'>
                                            <div className='facilitybox'>
                                                <span><i className='fa fa-building'></i></span>
                                                <span>Facility - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                                            </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-top">
                                        <b><small className='dotdr orlight'></small> Dr. Amanda Jhon <span className='drspec'>Radiologist</span></b>
                                        <a href='#'><span className="badge"><i className="fa fa-pencil"></i></span></a>
                                    </li>
                                    <li className='list-group-item'>
                                            <div className='facilitybox'>
                                                <span><i className='fa fa-building'></i></span>
                                                <span>Facility - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                                            </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-top">
                                        <b><small className='dotdr green'></small> Dr. Jimin Park <span className='drspec'>Neuro Physician</span></b>
                                        <a href='#'><span className="badge"><i className="fa fa-pencil"></i></span></a>
                                    </li>
                                    <li className='list-group-item'>
                                            <div className='facilitybox'>
                                                <span><i className='fa fa-building'></i></span>
                                                <span>Facility - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</span>
                                            </div>
                                    </li>
                                   
                                </ul> 
                               
                            </div>
                        </div>
                    </div>
                </div>

               
      
      </div>
    
    </>
    

    )
  };
  
  export default Admin;
  