import axios from "axios";

const PURCHASE_REST_API_URL_MONTH = 'http://localhost:8080/api/transactions/month';
const PURCHASE_REST_API_URL_TOTAL = 'http://localhost:8080/api/transactions/total';

class PurchaseService{

    getPurchasesMonth(){
       return axios.get(PURCHASE_REST_API_URL_MONTH);
    }

    getPurchasesTotal(){
        return axios.get(PURCHASE_REST_API_URL_TOTAL);
    }

}

export default new PurchaseService()