import axios from 'axios';
import {API_URL} from "../config";

export const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'client': JSON.parse(localStorage.getItem('headers')).client,
        'uid': JSON.parse(localStorage.getItem('headers')).uid,
        'access-token': JSON.parse(localStorage.getItem('headers'))['access-token'],
    }
};
export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        return axios.post(`${API_URL}/categories`, {
            HEADERS
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
};