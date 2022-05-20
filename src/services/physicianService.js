import Configuration from '../config/config';
import errors from '../helpers/errors';
class physicianService {
  constructor() {
    this.config = new Configuration();
  }

  async getPhysicianList() {
    return fetch(this.config.BASE_URL+'/listepic',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Contect-Type': 'application/json',
        'Authorization': 'Bearer '+ this.config.access_token,
      },
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

  async searchPhysicianList(name) {
    return fetch(this.config.BASE_URL+'/searchepic/'+name,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Contect-Type': 'application/json',
        'Authorization': 'Bearer '+ this.config.access_token,
      },
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

  async getPhysicianByMr(user_id) {
    return fetch(this.config.BASE_URL+'/doctor_details_mr/'+user_id,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Contect-Type': 'application/json',
        'Authorization': 'Bearer '+ this.config.access_token,
      },
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

}
export default physicianService;
