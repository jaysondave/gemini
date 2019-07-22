import axios from 'axios';
import {API_URL} from "../config";
export const signIn = (user) => {
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