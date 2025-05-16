import React from 'react'
import './BigEventCard.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { eventList } from "../../assets/data-array";
import moment from  'moment';




const BigEventCard = (props) => {

let eventData = eventList[props.param-1]

let eventStart = moment(eventData.start).format('MMMM Do YYYY, h:mm:ss a');
let eventEnd = moment(eventData.end).format('MMMM Do YYYY, h:mm:ss a');

console.log(eventStart);



  return (
    <div>
        <Card className='big-card-outer'>
      <div className='big-card-image'>
      </div>
      <Card.Body>
        <h2>{eventData.title}</h2>
        <p>
         {eventData.description}
        </p>
        <p>Start: {eventStart}</p>
        <p>End: {eventEnd}</p>

        <Link to={`events/${props.param}`}><Button variant="primary">Add to Calendar</Button></Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default BigEventCard
