import React from 'react'
import "./Home.css";
import Header from '../../components/Header/Header'
import PreviewEvents from '../../components/PreviewEvents/PreviewEvents';
const Home = (eventList) => {
  return (
    <div>
      <Header/>
      <PreviewEvents eventList={eventList}/>

    </div>
  )
}

export default Home
