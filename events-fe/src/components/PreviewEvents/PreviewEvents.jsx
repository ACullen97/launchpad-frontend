import React from "react";
import "./PreviewEvents.css";
import "../../components/EventCard/EventCard";
import EventCard from "../../components/EventCard/EventCard";
import { eventList } from "../../assets/data-array";


const PreviewEvents = () => {

  const sliced = eventList.slice(0,4)

  return (
    <div className="preview-events" id="preview-events">
      <h1>Latest Events</h1>
      <div className="card-holder">
        {sliced.map((e, i) => {
            return <EventCard key={i} id={e.id} title={e.title} description={e.description}/>
        })}
       
      </div>
    </div>
  );
};

export default PreviewEvents;
