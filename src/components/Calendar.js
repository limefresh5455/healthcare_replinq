import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../events'
import AdminLeftMenu from './backend/AdminLeftMenu';
import Schedule from './Schedule';
import {Link} from 'react-router-dom';

let dts = [];
let t = 0



export default class Calendar extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  constructor(props) {
    super(props);
    this.state = ({
      calEvent: []
      , event: {
        id: "",
        title: "",
        start: ""
      }
    })



  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    // localStorage.setItem('Name', {});
   // 
    http://127.0.0.1:8000/api/show
    fetch("https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Practitioner?family=physician&name=Smith", {
      method: "Get",
      headers: {


        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiJkOWYwN2JlNi0yOGNkLTQ2OWEtYjJjMS1jNjU5NWNjODE5MDEiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6IkRrcnkycUI2ME5MYklyLTFOZ0w0RHFoYlZwLUtfS21oeEdabVhaWGpCT3lyNncySVI4SHh2VnYxQzJQOEpBYzNseEQ3WGFfNzJOZGxaSWdwaHh6T2Framt0TktMR0dWZlFOb1Y0OUpKWlh0czV0Nl9Id3otMkNRcTR6WVZwS1FUIiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE2NDk5NDE2MzcsImlhdCI6MTY0OTkzODAzNywiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiNWM3MmM0MDMtNjRiNy00YmFiLWFmMGItZmQwNTc0NjA3ZTg4IiwibmJmIjoxNjQ5OTM4MDM3LCJzdWIiOiJldk5wLUtoWXdPT3FBWm4xcFoyZW51QTMifQ.HUYyHJIpJfKgDPB6tl7ExOwBT3b4EKLHxE7KkXZ2qVL5QY0qwbL3GYG0aMXRxjWokbS-kQ-48w-tbsxGc7nLFqdpQt8qs_QotQRVJ5UPJNMPtOwYdyVZ8fmaAVeqpDSyCTxiTZULx11Ni-6vp0U0-wup9XZDjX47N3mCF7rLZnWUbqpbx72HrwH-WgqoD-lAZK0Ziw4xN_59Ltg6ifYBWp2MbIkJIErG7LZCwLhpWTlIWMdOojdB6cH0uYaXZoDiguATq1-MDly4MfxRqNj9atEBsN-o04YHgCr88JJ67GxO76YfekZykzcbCmYIHi048eal6AeqHuk4C_UCaTzILA',
        'Content-Type': ' application/json',
        'Accept': 'application/json+fhir',
      },
    }).then(response => response.json())
      .then(res => {
        console.log(res);
        // console.log(res.resourceType);
        // console.log(res.type);
        // console.log(res.total);
        let todayStr = new Date().toISOString().replace(/T.*$/, '')
        let k = 0
        t++
        if (t==2)
        {
          for (let i = 0; i < res.entry.length; i++) {
            for (let j = 0; j < res.entry[i].resource.name.length; j++) {
              console.log(res.entry[i].resource.name[j].text)
              k++
              const obj = {
                id: k + "",
                title: res.entry[i].resource.name[j].text,
                start: todayStr
              }
              dts.push(obj);
              this.setState({ calEvent: dts });

            }



          }
        }
         
      //  console.log(this.state.calEvent)
        // console.log(res.entry);


        // k++

        //   for (let i = 0; i < res.length; i++) {
        //     let j = i
        //     j++
        //   if(k==2)
        //   {
        //     const obj = {
        //       id: j + "",
        //       title: res.resourceType,
        //       start: todayStr
        //     }
        //     dts.push(obj);
        //   }
        //   }

        //  this.setState({calEvent:dts});   
        //  console.log(this.state.dts);
        //  console.log(this.state.calEvent);
      }).catch(err => console.log(err))

  }


  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
            events={this.state.calEvent}// called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
        </div>
      </div>
    )
  }



  renderSidebar() {
    return (
      <>
        <div className="offcanvas offcanvas-start" id="demo">
          <AdminLeftMenu />
        </div>
      </>
    )
  }



  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection


  }
  handleEventClick = (info) => {
    // window.confirm(info).push({
    //   pathname: "/schedule",
    //   state: {
    //     value: info
    //   },
    // });
    // <Link to={{ pathname:'/schedule',
    //    state: {
    //      value: info
    //    } }}>Move to next Page</Link>
     window.location.href = "/schedule/";
  
    // this.setState({ event: info })

  }

}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  )
}


// import React from 'react'
// import AdminLeftMenu from './backend/AdminLeftMenu';

// const Calendar = () => {
//   return (
//     <>
//       <div className="offcanvas offcanvas-start" id="demo">
//         <AdminLeftMenu />
//       </div>
//       <div className="rightpane">
//         <div className='container'>
//           <div className='row'>
//           <h6>November 21,2021</h6>
//             <div class="avatarwrap">
//               <div class="avname">
//                 <h2>SJ</h2>
//                 <span class="avedit"><a href="#"><i class="fa fa-pencil"></i></a></span>
//               </div>
//               <h6>Dr. Sarah Jonas</h6>
//             </div>
//             <div className='col-md-12'>
//               <div className="row align-items-center">
//                 <div className="col-md-12">
//                   <div className="schedule-boxleft">
//                     <div className="yearbox" style={{ "background-color": "#F4F1DE", "border-bottom": "0px" }}>
//                       <h2>Schedule</h2>
//                       <h2 style={{ "color": "#e28563" }}>Nov, 11 2020</h2>
//                       <span><a href="#" className="me-4 text-dark"><i className="fa fa-chevron-left"></i></a>
//                         <a href="#" className="text-black"><i className="fa fa-chevron-right"></i></a></span>
//                     </div>
//                     <div className="row align-items-center">
//                       <div className="col-md-2"><p style={{ "margin-left": "20px" }}>8:00 AM</p></div>
//                       <div className="col-md-10">
//                         <div className="upschedulebox bdrleft mb-4">
//                           <div className="uphdr">
//                           </div>
//                           <div className="myphy-boxleft">
//                             <div className='row'>
//                               <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
//                               <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
//                               <div className="col-2 upcom-time ms-auto">8 - 10:30am</div>
//                               <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
//                               <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row align-items-center">
//                       <div className="col-md-2"><p style={{ "margin-left": "20px" }}>9:00 AM</p></div>
//                       <div className="col-md-10">
//                         <div className="upschedulebox bdrleft mb-4">
//                           <div className="uphdr">
//                           </div>
//                           <div className="myphy-boxleft">
//                             <div className='row'>
//                               <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
//                               <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
//                               <div className="col-2 upcom-time ms-auto">8 - 10:30am</div>
//                               <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
//                               <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row align-items-center">
//                       <div className="col-md-2"><p style={{ "margin-left": "20px" }}>10:00 AM</p></div>
//                       <div className="col-md-10">
//                         <div className="upschedulebox bdrleft mb-4">
//                           <div className="uphdr">
//                         </div>
//                           <div className="myphy-boxleft">
//                             <div className='row'>
//                               <div className='col-1 text-center mb-3'><i className="fa fa-building"></i></div>
//                               <div className='col-9 mb-3 ps-0'>Saint Francis Hospital</div>
//                               <div className="col-2 upcom-time ms-auto">8 - 10:30am</div>
//                               <div className='col-1 text-center'><i className="fa fa-medkit"></i></div>
//                               <div className='col-11 ps-0'>Right shoulder arthroscopy w/ subacrom/ial decompression, rotator cuff repair</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };
// export default Calendar;
