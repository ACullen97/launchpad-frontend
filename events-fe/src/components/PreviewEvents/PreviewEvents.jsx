import React from "react";
import "./PreviewEvents.css";
import "../../components/EventCard/EventCard";
import EventCard from "../../components/EventCard/EventCard";
import { useState, useEffect } from "react";
import getEvents from "/root/northcoders/launchpadv2/launchpad-frontend/events-be/api.js" 


const PreviewEvents = () => {

    const [events, setEvents] = useState([]);
  
   useEffect(() => {
      getEvents().then((data) => {
        setEvents(data.data);
      }).catch((err)=>{
        console.log(err)
      });
    }, []);

  const sliced = events.slice(0,4)



  return (
    <div className="preview-events" id="preview-events">
      <h1>Latest Events</h1>
      <div className="card-holder">
        {sliced.map((e, i) => {
            return <EventCard key={i} id={e._id} name={e.name} description={e.description} image={e.image}/>
        })}
       
      </div>
    </div>
  );
};

export default PreviewEvents;
