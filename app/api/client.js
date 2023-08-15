import axios from "axios";
import { API_URL } from '@env';

// creating the baseURL for api requests
export default axios.create({
    baseURL: API_URL,
    responseType: 'json'
});