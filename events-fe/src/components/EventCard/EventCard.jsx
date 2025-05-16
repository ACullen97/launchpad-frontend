import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = (props) => {

  return (
    <Card className='card-outer'>
      <div className='card-image'>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Link to={`/events/${props.id}`}><Button variant="primary">View Event</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default EventCard
