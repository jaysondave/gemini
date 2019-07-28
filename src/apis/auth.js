import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
class AuthAPI extends ConfigurationAPI {
    signIn = (user) => {
        console.log({user})
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/users/sign_in`, ({user: user}), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    signUp = (user) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/users`, ({user: user}), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    signOut = () => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/users/sign_out`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default AuthAPI;