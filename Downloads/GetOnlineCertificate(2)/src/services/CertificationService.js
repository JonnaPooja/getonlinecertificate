import axios from 'axios';

const CERTIFICATION_API_BASE_URL = "http://localhost:8086/api/v3/certificate";

class CertificationService {

    getCertification(){
        return axios.get(CERTIFICATION_API_BASE_URL);
    }

    saveCertification(certification){
        return axios.post(CERTIFICATION_API_BASE_URL, certification);
    }

    getCertificationById(certificationId){
        return axios.get(CERTIFICATION_API_BASE_URL + '/' + certificationId);
    }

    updateCertification(certification, certificationId){
        return axios.put(CERTIFICATION_API_BASE_URL + '/' + certificationId, certification);
    }

    deleteCertification(certificationId){
        return axios.delete(CERTIFICATION_API_BASE_URL + '/' + certificationId);
    }
}

export default new CertificationService()