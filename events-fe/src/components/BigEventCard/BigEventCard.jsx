import React from "react";
import "./BigEventCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { eventList } from "../../assets/data-array";
import moment from "moment";
import { useEffect, useState } from "react";
import { getEvent } from "/root/northcoders/launchpadv2/launchpad-frontend/events-be/api.js";
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
            src={"https://launchpad-frontend-dcao.onrender.com/images/" + event.image}
          />
        </div>
        <Card.Body>
          <h2 className={"big-card-title"}>{event.name}</h2>
          <p className={"big-card-description"}>{event.description}</p>
          <p><strong>Start:</strong></p>
          <p>{eventStart}</p>
          <p><strong>End:</strong></p>
          <p>{eventEnd}</p>
          <div>&nbsp;</div>
          <a href={googleUrl} target="_blank"><Button className="add-to-calendar" variant="primary">Add to Calendar</Button></a>
 
        </Card.Body>
      </Card>
    </div>
  );
};

export default BigEventCard;
