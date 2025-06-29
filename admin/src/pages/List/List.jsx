import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/event/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeEvent = async (eventID) => {
    const response = await axios.post(`${url}/api/event/remove`, {id:eventID});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <div className="list add flex-col">
        <p>All Events</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Start</b>
            <b>End</b>
            <b>Category</b>
            <b className="cursor">Action</b>
          </div>
          {list.map((item, index)=>{return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+ item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.start}</p>
              <p>{item.end}</p>
              <p>{item.category}</p>
              <p className="item-remove" onClick={()=>{removeEvent(item._id)}}>X</p>

              
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default List;
