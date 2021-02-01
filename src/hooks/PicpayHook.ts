import { useState, useCallback } from 'react';

import Api, { ApiType } from '../services/api';
import axios from 'axios';

import { IResponseError } from '../entities/ResponseError';
import { IPaymentRequest } from '../entities/PaymentRequest';
import { IPaymentResponse } from '../entities/PaymentResponse';
import { ICancelResponse } from '../entities/CancelResponse';
import { IStatusResponse } from '../entities/StatusResponse';
import { INotificationRequest } from '../entities/NotificationRequest';
import { ICancelRequest } from '../entities/CancelRequest';

export type PickpayHook={
    isLoading:boolean; 
    error:IResponseError|undefined,
    clearError:()=>void, 
    cancelAnyRequest:()=>void, 
    paymentRequest:(body:IPaymentRequest)=>Promise<IPaymentResponse | undefined>, 
    cancelRequest:(body:ICancelRequest)=>Promise<ICancelResponse | undefined>,
    statusRequest:(referenceId:string)=>Promise<IStatusResponse | undefined>,
    notificationRequest:(body:INotificationRequest)=>Promise<string| undefined> 

}

export const usePickpayHook= ({ xPicpayToken, xSellerToken, baseUrl }: ApiType):PickpayHook  => {

  const axiosService = new Api({ xPicpayToken, xSellerToken, baseUrl }).getAxiosService();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<IResponseError | undefined>();

  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const cancelAnyRequest = useCallback(() => {
    source.cancel();
  }, [])

  const paymentRequest = useCallback(async (body) => {

    setIsLoading(true);

    try {
      clearError();

      const { data } = await axiosService.post('/payments', body, { cancelToken: source.token });
      setIsLoading(false);
      return data;

    } catch ( err ) {

      setIsLoading(false);
      const { data } = err.response;
      setError(data.message);

    }

  }, [])

  const cancelRequest = useCallback(async (body): Promise<ICancelResponse | undefined> => {

    setIsLoading(true);

    try {

      const { data } = await axiosService.post(`/payments/${body.referenceId}/cancellations`, body, { cancelToken: source.token });
      setIsLoading(false);
      return data;

    } catch ( err ) {

      setIsLoading(false);
      const { data } = err.response;
      setError(data.message);

    }

  }, [])

  const statusRequest = useCallback(async (referenceId): Promise<IStatusResponse | undefined> => {

    setIsLoading(true);

    try {

      const { data } = await axiosService.get(`/payments/${referenceId}/status`, { cancelToken: source.token });
      setIsLoading(false);
      return data;

    } catch ( err ) {

      setIsLoading(false);
      const { data } = err.response;
      setError(data.message);

    }

  }, [])

  const notificationRequest = useCallback(async (body): Promise<string | undefined> => {

    setIsLoading(true);

    try {
      clearError();

      const { data } = await axiosService.post('/callback', body, { cancelToken: source.token });
      setIsLoading(false);
      return data;

    } catch ( err ) {

      setIsLoading(false);
      const { data } = err.response;
      setError(data.message);

    }

  }, [])


  const clearError = () => {
    setError(undefined);
  };

  return { isLoading, 
    error,
    clearError, 
    cancelAnyRequest, 
    paymentRequest, 
    cancelRequest,
    statusRequest,
    notificationRequest 
  };

}