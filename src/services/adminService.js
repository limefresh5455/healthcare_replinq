import Configuration from '../config/config';
import errors from '../helpers/errors';

class adminService {
  constructor() {
    this.config = new Configuration();
  }

  async getAdminList() {
    return fetch(this.config.BASE_URL + '/listepic', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Contect-Type': 'application/json',
        'Authorization': 'Bearer ' + this.config.access_token,
      },
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }
}


export default adminService;