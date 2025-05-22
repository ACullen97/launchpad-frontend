import {React, useEffect, useState} from 'react'
import './Add.css';
import axios from "axios";


const Add = () => {

    const url = "http://localhost:4000";
const [image, setImage] = useState(false);
const [data, setData] = useState({name: "", description:"", start:"", end:"", category:"Sports"})

const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value =e.target.value;
    setData(data=>({...data, [name]:value}))
}

const onSubmitHandler = async (e)=> {
e.preventDefault();
const formData = new FormData();
formData.append("name", data.name)
formData.append("description", data.description)
formData.append("start",data.start)
formData.append("end", data.end)
formData.append("category", data.category)
formData.append("image", image)
const response = await axios.post(`${url}/api/event/add`, formData);
if(response.data.success){
setData({name: "", description:"", start:"", end:"", category:"Sports"});
setImage(false)
}
else{}
}

useEffect(() => {console.log(data)}, [data])

  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                {image ? <p>Image Upload Successful</p> :  <></>} 
            </label>
            <input onChange={(e) => {setImage(e.target.files[0])}} type="file" id="image" required/>
        </div>

        <div className="add-product-name flex-col">
            <p>Title</p>
        <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type Here' />
        </div>

        <div className='add-product-description flex-col'>
            <p>Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Type description here' required></textarea>
        </div>

            <div className='add-product-start flex-col'>
            <p>Event Start</p>
            <input type='datetime-local' onChange={onChangeHandler} value={data.start} name="start"  required></input>
        </div>

            <div className='add-product-end flex-col'>
            <p>Event End</p>
            <input type='datetime-local' onChange={onChangeHandler} value={data.end} name="end" required></input>
        </div>

        <div className="add-category-data">
            <div className='add-category flex-col'>
                <p>Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Sports">Sports</option>
                     <option value="Music">Music</option>
                      <option value="Cooking">Cooking</option>
                       <option value="Arts & Crafts">Arts & Crafts</option>
                        <option value="Nightlife">Nightlife</option>
                         <option value="Dating">Dating</option>
                         <option value="Business">Business</option>
                         <option value="Other">Other</option>
                </select>
            </div>
        </div>
        <button type='submit' className='add-btn'>Add Event</button>
      </form>
    </div>
  )
}

export default Add
