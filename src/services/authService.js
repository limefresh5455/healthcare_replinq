import Configuration from '../config/config';
import errors from '../helpers/errors';
class authService {
  constructor() {
    this.config = new Configuration();
  }

  async login(data) {
    return fetch(this.config.BASE_URL+'/login',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

  async register(data) {
    return fetch(this.config.BASE_URL+'/register',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

}
export default authService;
