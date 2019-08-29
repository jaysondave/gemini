import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
export class CadastralKindAPI extends ConfigurationAPI {
    fetchAll = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/cadastral_kinds`, {
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
            return axios.post(`${API_URL}/cadastral_kinds`, body, {
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
            return axios.put(`${API_URL}/cadastral_kinds/${id}`, body, {
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
            return axios.delete(`${API_URL}/cadastral_kinds/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
