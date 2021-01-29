import useHttpClient from '../hooks/HttpHook';
import {ApiType} from '../services/api';
import {AxiosResponse} from 'axios';

import  PaymentRequest,{IPaymentRequest} from '../entities/PaymentRequest';
import  PaymentResponse,{IPaymentResponse} from '../entities/PaymentResponse';

class PicpayPayment{

    public isLoading:boolean
    public sendRequest:(url: any, method?: any, body?: any) => Promise<AxiosResponse<any>>;

    constructor({xPicpayToken,xSellerToken,baseUrl}:ApiType){

        const { isLoading, sendRequest } = useHttpClient({xPicpayToken,xSellerToken,baseUrl});

        this.isLoading = isLoading;
        this.sendRequest = sendRequest;

    }

    async sendPaymentRequest(body:IPaymentRequest):Promise<IPaymentResponse>{

        try{

            let response = await this.sendRequest(`/payments`,'POST',new PaymentRequest(body));
            return new PaymentResponse(response.data);

        }catch(err){
        
            return new PaymentResponse(err.response.data);
        
        }

    }



}

export default PicpayPayment;