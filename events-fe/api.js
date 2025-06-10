import axios from "axios";

export const getEvents = () => {

    return axios.get(`https://launchpad-frontend-dcao.onrender.com/api/event/list`).then(({data}) => {
        return data;
    })
}

export const getEvent = (id) => {

    return axios.get(`https://launchpad-frontend-dcao.onrender.com/api/event/${id}`).then(({data}) => {
        return data
    })
}



export default getEvents;
