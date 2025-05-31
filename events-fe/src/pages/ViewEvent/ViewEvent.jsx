import React from 'react'
import BigEventCard from '../../components/BigEventCard/BigEventCard'
import { eventList } from "../../assets/data-array";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ViewEvent = () => {

    let paramID = useParams();

  return (
    <div>

        <BigEventCard param={paramID.id}/>
      
    </div>
  )
}

export default ViewEvent
