import {userHelper} from '../helpers';

class ConfigurationAPI {
    constructor() {
        this.headers = null;
    }
    initHeaders = () => {
        const authUser = userHelper.getStorage();
        const headers = authUser?authUser.headers:null;
        this.headers = {
            'Content-Type': 'application/json',
            'client': headers ? headers['client'] : '',
            'uid': headers ? headers['uid'] : '',
            'access-token': headers ? headers['access-token'] : '',
        };
        return this.headers;
    }
}

export default ConfigurationAPI;