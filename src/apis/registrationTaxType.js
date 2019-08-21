import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
export class RegistrationTaxTypeAPI extends ConfigurationAPI {
    fetchAll = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/registration_tax_types`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    createItem = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/registration_tax_types`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    updateItem = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/registration_tax_types/${id}`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteItem = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/registration_tax_types/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
