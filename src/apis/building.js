import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
class BuildingAPI extends ConfigurationAPI {
    register = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/buildings`, ({building: body}), {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    fetchAll = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/buildings`,  {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default BuildingAPI;