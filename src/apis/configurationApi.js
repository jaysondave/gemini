import {userHelper} from '../helpers';

class ConfigurationAPI {
    constructor() {
        const authUser = userHelper.getStorage('authUser');
        const headers = authUser?authUser.headers:null
        this.headers = {
            'Content-Type': 'application/json',
            'client': headers ? headers['client'] : '',
            'uid': headers ? headers['uid'] : '',
            'access-token': headers ? headers['access-token'] : '',
        };
    }
}

export default ConfigurationAPI;