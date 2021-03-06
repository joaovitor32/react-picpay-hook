import axios, {AxiosInstance} from 'axios';

export type ApiType = {

    xPicpayToken:string;
    xSellerToken:string;
    baseUrl:string

}

class Api{

    private axiosService:AxiosInstance;

    public xPicpayToken:string;

    public xSellerToken:string;

    /**
    * 
    * @param {baseUrl} = https://appws.picpay.com/ecommerce/public/
    *
    **/

    public baseUrl:string

    constructor({xPicpayToken,xSellerToken,baseUrl}:ApiType){

        this.xSellerToken = xSellerToken;
        this.xPicpayToken = xPicpayToken;
        this.baseUrl = baseUrl;

        this.axiosService = axios.create({

            baseURL:this.baseUrl,
            headers:{
                'accept-encoding': 'gzip,deflate',
                'Content-Type': 'application/json',
                'x-picpay-token': this.xPicpayToken,
                'x-seller-token': this.xSellerToken,
            }

        })

    }

    public getAxiosService():AxiosInstance{
        return this.axiosService;
    }

}

export default Api;