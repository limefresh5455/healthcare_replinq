import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../events'
import AdminLeftMenu from './backend/AdminLeftMenu';
import Schedule from './Schedule';
import { Link } from 'react-router-dom';
import physicianService from '../services/physicianService';


let dts = [];
let resObject = [];

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
      },
      physicianService: new physicianService()
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    const user_id = localStorage.getItem('user_id');
    this.state.physicianService.getPhysicianByMr(user_id).then(res => {
      resObject = res;
      console.log("lav" + JSON.stringify(resObject));
      localStorage.setItem('alldata', JSON.stringify(res));
      dts = [];
      for (let i = 0; i < res.length; i++) {
        console.log("start===" + res[i].start_date)
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
    }
    );
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
    for (let j = 0; j < resObject.length; j++) {

      const date = info.event.start

      let years = date.getFullYear()
      let month = (date.getMonth() + 1)
      let day = date.getDate()

      let newMonth;

      let newDay;

      if (month<10) {
        newMonth = "0" + month
      }else{
        newMonth=month
      }

      if (day<10) {
        newDay = "0" + day
      }else{
        newDay=day
      }

      let newDate = years + "-" + newMonth + "-" + newDay
    
      if (newDate == resObject[j].start_date) {
        console.log("date==" + newDate + "==" + resObject[j].start_date);
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

