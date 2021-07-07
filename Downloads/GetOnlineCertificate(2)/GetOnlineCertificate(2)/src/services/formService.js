import axios from "axios";

const API_URL = "http://getcertifiedonline.cln0x6jdkns2.us-east-2.rds.amazonaws.com:8086/api/v3/customer";

class formService { 
  

  CustomerRegistration(username, email, password,phoneNo,address) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
      phoneNo,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default  formService;