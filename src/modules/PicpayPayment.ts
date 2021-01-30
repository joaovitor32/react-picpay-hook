import { AxiosResponse } from 'axios';
import Api, { ApiType } from '../services/api';

import PaymentRequest, { IPaymentRequest } from '../entities/PaymentRequest';
import PaymentResponse, { IPaymentResponse } from '../entities/PaymentResponse';

class PicpayPayment {

    baseUrl: string;
    xPicpayToken: string;
    xSellerToken: string;
    loading: boolean
    axios: Api;

    constructor({ xPicpayToken, xSellerToken, baseUrl }: ApiType) {

        this.baseUrl = baseUrl;
        this.xPicpayToken = xPicpayToken;
        this.xSellerToken = xSellerToken;
        this.loading = false;
        this.axios = new Api({ xPicpayToken, xSellerToken, baseUrl });

    }

    async sendRequest(url: string, method = 'GET', body: object) {

        let response: IPaymentResponse;
        this.loading = true;
        const axiosService = this.axios.getAxiosService();

        switch (method) {
            case 'GET':
                response = await axiosService.get(url)
                break;
            case 'POST':
                response = await axiosService.post(url, body)
                break;
            default:
                throw new Error("Inexistent method");
        }

        this.loading = false;
        
        return response;


    }

    async sendPaymentRequest(body: IPaymentRequest): Promise<IPaymentResponse> {

        try {

            let response = await this.sendRequest(`/payments`, 'POST', new PaymentRequest(body));
            return new PaymentResponse(response);

        } catch (err) {

            return new PaymentResponse(err.response.data);

        }

    }



}

export default PicpayPayment;