import axios from 'axios';

const PaymentDetails_API_BASE_URL = "http://localhost:8086/api/v3/paymentdetails";

class PaymentDetailsService {

    getPaymentDetails(){
        return axios.get(PaymentDetails_API_BASE_URL);
    }

    createPaymentDetails(paymentdetails){
        return axios.post(PaymentDetails_API_BASE_URL, paymentdetails);
    }
    
    getPaymentDetailsById(paymentId){
        return axios.get(PaymentDetails_API_BASE_URL + '/' + paymentId);
    }
    deletePaymentDetails(paymentId){
        return axios.delete(PaymentDetails_API_BASE_URL + '/' + paymentId);
    }
}

export default new PaymentDetailsService()