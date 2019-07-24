import axios from 'axios';
import {API_URL} from "../config";

export const headers = {
    'Content-Type': 'application/json',
    'client': JSON.parse(localStorage.getItem('headers')).client,
    'uid': JSON.parse(localStorage.getItem('headers')).uid,
    'access-token': JSON.parse(localStorage.getItem('headers'))['access-token'],
};
export const fetchAllCategories = () => {
    return new Promise((resolve, reject) => {
        return axios.get(`${API_URL}/categories`, {
            headers
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
};

export const createCategory = (body) => {
    return new Promise((resolve, reject) => {
        return axios.post(`${API_URL}/categories`, body, {
            headers
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
};

export const updateCategory = (id, body) => {
    return new Promise((resolve, reject) => {
        return axios.put(`${API_URL}/categories/${id}`, body, {
            headers
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
};

export const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        return axios.delete(`${API_URL}/categories/${id}`, {
            headers
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
};