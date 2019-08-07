import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
class BuildingTypeAPI extends ConfigurationAPI {
    fetchAllBuildingTypes = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/building_types`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    createBuildingType = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/building_types`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    updateBuildingType = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/building_types/${id}`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteBuildingType = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/building_types/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
export default BuildingTypeAPI;
