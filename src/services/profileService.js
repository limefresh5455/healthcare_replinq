import Configuration from '../config/config';
import errors from '../helpers/errors';
class profileService {
  constructor() {
    this.config = new Configuration();
  }

  async getProfileData() {
    return fetch(this.config.BASE_URL+'/getData',{
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

  async updateProfile(data, userId) {
    return fetch(this.config.BASE_URL+'/updateData/'+userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': 'Bearer '+ this.config.access_token,
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

  async changePassword(data) {
    return fetch(this.config.BASE_URL+'/changepassword', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': 'Bearer '+ this.config.access_token,
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

  async updateImage(data, userId) {
    return fetch(this.config.BASE_URL+'/updateImage/'+userId, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        'Authorization': 'Bearer '+ this.config.access_token
      },
      body: data
    }).then(response => {
      return response.json();
    }).catch(error => {
      new errors().handleError(error);
    });
  }

}
export default profileService;
