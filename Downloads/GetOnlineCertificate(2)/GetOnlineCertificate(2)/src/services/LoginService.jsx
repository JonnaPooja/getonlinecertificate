import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://getcertifiedonline.cln0x6jdkns2.us-east-2.rds.amazonaws.com:8086/api/v3/Login";

class LoginService {

    validate(id,password)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + id + '/' + password);
    }
}

export default new LoginService()


