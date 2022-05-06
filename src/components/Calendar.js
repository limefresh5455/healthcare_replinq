import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../events'
import AdminLeftMenu from './backend/AdminLeftMenu';
import Schedule from './Schedule';
import { Link } from 'react-router-dom';

let dts = [];
let resObject = [];
//let t = 0



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
        start: "",
        start_date: ""
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
    //http://127.0.0.1:8000/api/show
    fetch("http://127.0.0.1:8000/api/doctor_details_mr/52", {
      method: "Get",
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1MTc1NTkwMSwiZXhwIjoxNjUxNzU5NTAxLCJuYmYiOjE2NTE3NTU5MDEsImp0aSI6Imo4czNtNXRpTFVoWDUxbTAiLCJzdWIiOjUyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.Z4pwNC2fXuDV9g8EdA655qInUIc3DsWbS79KE4zvXro',
        'Content-Type': ' application/json',
        'Accept': 'application/json+fhir',
      },
    }).then(response => response.json())
      .then(res => {
        console.log(res);
        resObject = res;
       // console.log(res.id);  
       localStorage.setItem('alldata', JSON.stringify(res));
      
       dts = [];
        for (let i = 0; i < res.length; i++) {
          const obj = {
            id: res[i].id,
            title: res[i].first_name,
            start: res[i].start_date
          }
          dts.push(obj);
          
        }
       
        this.setState({ calEvent: dts });
        let todayStr = new Date().toISOString().replace(/T.*$/, '')
        let k = 0
          
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
    console.log(info);
    console.log(resObject);
    console.log(info.event.title);
    for(let j=0 ; j< resObject.length; j++)
    { 
       if(info.event.start_date == resObject[j].start_date)
       {
        console.log("id kkk" +resObject[j].id);  
        localStorage.setItem('event', JSON.stringify(resObject[j])); 
        break;      
       }
          
    }
    
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

