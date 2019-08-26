import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
export class SystemAPI extends ConfigurationAPI {
    register = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/body_systems`, body, {
                headers: {...this.initHeaders(), 'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    fetchAll = (id) => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/body_systems?body_id=${id}`,  {
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
            return axios.put(`${API_URL}/body_systems/${id}`, ({outdoor: body}), {
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
            return axios.delete(`${API_URL}/body_systems/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
