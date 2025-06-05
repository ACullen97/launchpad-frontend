import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = (props) => {

  return (
    <Card className='card-outer'>
      <div className='card-image'>
           <img className='card-image' src={"http://localhost:4000/images/" + props.image}/>
      </div>
      <Card.Body className='card-body'>
        <div className={'card-title'}><h4>{props.name}</h4></div>
       <div className={"card-description"}>
         {props.description}
   </div>
       <div>&nbsp;</div>
        <Link to={`/events/${props.id}`}><button className={"btn"}>View Event</button></Link>
      </Card.Body>
    </Card>
  )
}

export default EventCard
