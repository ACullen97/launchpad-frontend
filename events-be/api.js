import axios from 'axios'
export const getEvents = () => {

    return axios.get(`http://localhost:4000/api/event/list`).then(({data}) => {
        return data;
    })
}

export const getEvent = (id) => {

    return axios.get(`http://localhost:4000/api/event/${id}`).then(({data}) => {
        return data
    })
}



export default getEvents