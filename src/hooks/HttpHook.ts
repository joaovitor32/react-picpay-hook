import { useState, useCallback, useRef, useEffect,RefObject } from 'react';

import Api, { ApiType } from '../services/api';

export const useHttpClient = ({ xPicpayToken, xSellerToken, baseUrl }: ApiType) => {

    const [isLoading, setIsLoading] = useState(false);

    let axios = new Api({ xPicpayToken, xSellerToken, baseUrl });
    
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
