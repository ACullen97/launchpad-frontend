import React from 'react'
import './AllEvents.css'
import EventCard from '../EventCard/EventCard';
import getEvents from '../../../../events-be/api';
import { useEffect, useState } from "react";


const AllEvents = () => {

  const [events, setEvents] = useState([]);

 useEffect(() => {
    getEvents().then((data) => {
      setEvents(data.data);
    }).catch((err)=>{
      console.log(err)
    });
  }, []);

  return (
    <div className="all-events" id="all-events">
      <h1>All Events</h1>
      <div className="card-holder">
        {events.map((e, i) => {
            return <EventCard key={i} id={e._id} name={e.name} description={e.description} image={e.image}/>
        })}
      </div>
    </div>
  );
}

export default AllEvents
