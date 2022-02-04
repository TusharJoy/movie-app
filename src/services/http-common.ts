import axios from 'axios';

export  const  Http = axios.create({

    baseURL: process.env.VUE_APP_API_BASE_URL,
    params: {
        api_key : process.env.VUE_APP_API_TOKEN
    },
})