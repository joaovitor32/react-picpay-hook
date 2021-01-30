import React,{ useState, useCallback } from 'react';

import Api, { ApiType } from '../services/api';


export const HttpClient = ({ xPicpayToken, xSellerToken, baseUrl }: ApiType) => {

    let axios = new Api({ xPicpayToken, xSellerToken, baseUrl });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const sendRequest = useCallback(
        async (url,method='GET',body=null)=>{
            
            setIsLoading(true);
            const axiosService = axios.getAxiosService();
            const response =method=="GET"?await axiosService.get(url, body):await axiosService.post(url, body);
            setIsLoading(false);

            return response;

        }
    ,[]);

    return { isLoading, sendRequest};

}

