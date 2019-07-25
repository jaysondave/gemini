import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
class CategoryAPI extends ConfigurationAPI {
    fetchAllCategories = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/categories`, {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    createCategory = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/categories`, body, {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    updateCategory = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/categories/${id}`, body, {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteCategory = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/categories/${id}`, {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default CategoryAPI;
