import axios from "axios";
import { BaseURL } from "./BaseURL";

export const axiosInstance = axios.create({
    baseURL:BaseURL,
    headers:{
        "Content-Type":"Application/json"
    }
})

export const axiosInstanceMultipart = axios.create({
    baseURL:BaseURL,
    headers: {
        'Content-Type': 'multipart/form-data' // Important for FormData
    }
})

