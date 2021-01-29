import axios, {AxiosInstance} from 'axios';

interface ApiType{

    xPicpayToken:string;
    xSellerToken:string;
    baseUrl:string

}

class Api{

    private axiosService:AxiosInstance;

    public xPicpayToken:string;

    public xSellerToken:string;

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
            }


        })

    }

    public getAxiosService():AxiosInstance{

        return this.axiosService;

    }

}

export default Api;