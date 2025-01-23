import axios from "axios";
import { BaseURL } from "./BaseURL";

export const Base = axios.create({
    baseURL:BaseURL,
    headers:{
        "Content-Type":"Application/json"
    }
})