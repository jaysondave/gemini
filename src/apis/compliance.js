import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
export class ComplianceAPI extends ConfigurationAPI {
    fetchAll = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/compliances`, {
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
            return axios.post(`${API_URL}/compliances`, body, {
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
            return axios.put(`${API_URL}/compliances/${id}`, body, {
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
            return axios.delete(`${API_URL}/compliances/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
