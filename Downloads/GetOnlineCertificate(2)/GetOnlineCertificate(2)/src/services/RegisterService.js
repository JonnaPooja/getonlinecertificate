import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://getcertifiedonline.cln0x6jdkns2.us-east-2.rds.amazonaws.com:8086/api/v3/addUser";

class RegisterSevice{

    addCustomer(c){
        const headers={
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":"*"
        }
        return axios.post(CUSTOMER_API_BASE_URL + '/',c,{
            headers: headers
        });
    }
}
export default new RegisterSevice()