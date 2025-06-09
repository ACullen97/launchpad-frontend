import React from 'react'
import './AllEvents.css'
import EventCard from '../EventCard/EventCard';
import getEvents from '../../../../events-be/api.js';
import { useEffect, useState } from "react";
import Pagination from '../Pagination/Pagination.jsx';


const AllEvents = () => {

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(12);

 useEffect(() => {
    getEvents().then((data) => {
      setEvents(data.data);
    }).catch((err)=>{
      console.log(err)
    });
  }, []);

  // Pagination

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 


  return (
    <div className="all-events" id="all-events">
      <h1>All Events</h1>
      <div className="card-holder">
        {currentEvents.map((e, i) => {
            return <EventCard key={i} id={e._id} name={e.name} description={e.description} image={e.image}/>
        })}
      </div>
      <Pagination eventsPerPage={eventsPerPage} totalEvents={events.length} paginate={paginate}/>
    </div>
  );
}

export default AllEvents
