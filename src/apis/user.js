import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
class UserAPI extends ConfigurationAPI {
    register = (user) => {
        console.log({user})
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/user`, ({user: user}), {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    fetchAllUser = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/users`,  {
                headers: this.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default UserAPI;