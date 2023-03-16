import axios from 'axios';

export default axios.create({
    baseURL: "someapilink",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('access')}`
     }
})