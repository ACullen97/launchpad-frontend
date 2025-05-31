import React from 'react'
import './BigEventCard.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { eventList } from "../../assets/data-array";
import moment from  'moment';
import { useEffect, useState } from 'react';
import { getEvent } from '../../../../events-be/api';

const BigEventCard = (props) => {

     const [event, setEvent] = useState([]);
      
       useEffect(() => {
          getEvent(props.param).then((data) => {
            setEvent(data.data);
             
          }).catch((err)=>{
            console.log(err)
          });
        }, []);

let eventStart = moment(event.start).format('MMMM Do YYYY, h:mm:ss a');
let eventEnd = moment(event.end).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
        <Card className='big-card-outer'>
      <div className='big-card-image'>
      </div>
      <Card.Body>
        <h2>{event.name}</h2>
        <p>
         {event.description}
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
