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

  async searchPhysicianList(name, userId) {
    return fetch(this.config.BASE_URL+'/searchepic/'+name+'/'+userId,{
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

  async deletePhysicianByMr(user) {
    return fetch(this.config.BASE_URL+'/delete/'+user.reference_id+'/'+user.doctor.mr_id,{
      method: 'DELETE',
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

  async AddPhysicianByMr(user) {

    var mr_id = localStorage.getItem('user_id'); 
    var reference_id = (user.reference_id +"");
     
    var user_data = {reference_id, mr_id}
    return  fetch('http://127.0.0.1:8000/api/doctor-add/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json+fhir",
        'Authorization': 'Bearer ' + this.config.access_token,
      },
      body: JSON.stringify(user_data)
    })
      .then((response) => {
        return response.json()
      })
  }

}
export default physicianService;
