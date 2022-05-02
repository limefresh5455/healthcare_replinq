import React from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';


const Notifications = () => {
    return (
    
    <>
    <div className="offcanvas offcanvas-start" id="demo">
       <AdminLeftMenu />
      </div>
      
      <div className="rightpane mynotif">
                <div className="container">
                  <div className='row justify-content-center'>
                    <div className='col-md-8 text-center'>
                    <img src="\images\notification-hero.png" width={'323'} alt='' /> 
                     <h2>My Notifications</h2>                 
                    </div>

                    <div className='col-12 col-md-8 mt-3'>
                    <div className="alert alert-dismissible fade show">
                        
                        <div className="upschedulebox notialertbox">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <div className="uphdr pt-0">                                                              
                                <h3>New Case</h3>
                                <div className="upcom-time ms-auto"><i className='fa fa-calendar'></i> Thursday, 2nd December - 8 - 8:30am</div>
                            </div>
                            <div className="myphy-boxleft notimyphy">
                                <div className="row">
                                     <div className="col-12 mb-3 dr-name"><b>Dr. Sarah Jonas</b> <span>(Radiologist)</span></div>
                                    <div className="col-1 text-center mb-2"><i className="fa fa-building"></i></div>
                                    <div className="col-11 mb-2 p-0"><b>Saint Francis Hospital</b></div>
                                    <div className="col-1 text-center"><i className="fa fa-medkit"></i></div>
                                    <div className="col-11 p-0">Right shoulder arthroscopy w/ subacromial decompression, rotator cuff repair</div>
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
  
export default Notifications;
