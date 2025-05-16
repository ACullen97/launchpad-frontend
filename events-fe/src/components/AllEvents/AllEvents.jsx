import React from 'react'
import './AllEvents.css'
import EventCard from '../EventCard/EventCard';
import { eventList } from "../../assets/data-array";

const AllEvents = () => {
  return (
    <div className="all-events" id="all-events">
      <h1>All Events</h1>
      <div className="card-holder">
        {eventList.map((e, i) => {
            return <EventCard key={i} id={e.id} title={e.title} description={e.description}/>
        })}
      </div>
    </div>
  );
}

export default AllEvents
