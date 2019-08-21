import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
export class BodyAPI extends ConfigurationAPI {
    register = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/bodies`, ({body: body}), {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    fetchAll = (id) => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/bodies?building_id=${id}`,  {
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
            return axios.put(`${API_URL}/bodies/${id}`, ({body: body}), {
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
            return axios.delete(`${API_URL}/bodies/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
