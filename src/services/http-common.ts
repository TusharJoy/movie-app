import axios from 'axios';

export  const  Http = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: 'Bearer '
    },
})