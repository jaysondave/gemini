import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
class BodyTypeAPI extends ConfigurationAPI {
    fetchAllBodyTypes = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/body_types`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    createBodyType = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/body_types`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    updateBodyType = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/body_types/${id}`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteBodyType = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/body_types/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default BodyTypeAPI;
