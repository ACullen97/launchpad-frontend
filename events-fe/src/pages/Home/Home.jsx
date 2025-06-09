import React from 'react'
import "./Home.css";
import Header from '../../components/Header/Header.jsx'
import PreviewEvents from '../../components/PreviewEvents/PreviewEvents.jsx';
const Home = ({eventList, menu, setMenu}) => {
  return (
    <div>
      <Header menu={menu} setMenu={setMenu}/>
      <PreviewEvents eventList={eventList}/>

    </div>
  )
}

export default Home
