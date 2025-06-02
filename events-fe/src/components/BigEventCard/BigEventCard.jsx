import React from "react";
import "./BigEventCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { eventList } from "../../assets/data-array";
import moment from "moment";
import { useEffect, useState } from "react";
import { getEvent } from "../../../../events-be/api";
import { google, outlook, office365, yahoo } from "calendar-link";

const BigEventCard = (props) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvent(props.param)
      .then((data) => {
        setEvent(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let eventCal = moment(event.start).format();

  let eventStart = moment(event.start).format("MMMM Do YYYY, h:mm:ss a");
  let eventEnd = moment(event.end).format("MMMM Do YYYY, h:mm:ss a");

  const timeDifference = moment(event.end).valueOf() - moment(event.start).valueOf();
  const duration = timeDifference / (1000 * 60 * 60);

  const myEvent = {
    uid: "your-unqiue-id",
    title: event.name,
    description: event.description,
    start: eventCal,
    duration: [Number(duration), "hour"],
  };

  const googleUrl = google(myEvent);

  return (
    <div>
      <Card className="big-card-outer">
        <div className="big-card-image-container">
          <img
            className="big-card-image"
            src={"http://localhost:4000/images/" + event.image}
          />
        </div>
        <Card.Body>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Start: {eventStart}</p>
          <p>End: {eventEnd}</p>
          <a href={googleUrl} target="_blank"><Button variant="primary">Add to Calendar</Button></a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BigEventCard;
