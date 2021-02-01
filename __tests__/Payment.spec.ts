import { renderHook, act } from '@testing-library/react-hooks'
import {usePickpayHook} from '../src/hooks/PicpayHook';
import { IBuyer } from '../src/entities/Buyer';
import { IPaymentRequest } from '../src/entities/PaymentRequest';
import { IPaymentResponse } from '../src/entities/PaymentResponse';

let xPicpayToken:string;
let xSellerToken:string;
let baseUrl:string;

let referenceId :string;

let buyer:IBuyer;
let payload: IPaymentRequest;

let okResponse:IPaymentResponse;

describe('Class Payment', () => {

    beforeEach(() => {
        /*https://app.picpay.com/user/teste*/
        xPicpayToken = '5b008cef7f321d00ef2367b2';
        xSellerToken = '4ef4edbd-5cda-42da-860b-0e8d7b90c784';
        baseUrl = "https://appws.picpay.com/ecommerce/public/"

        referenceId = `102030`;

        buyer = {
            firstName: 'João',
            lastName: 'Da Silva',
            document: '123.456.789-10',
            email: 'teste@picpay.com',
            phone: '+55 27 12345-6789',
        };

       payload = {
            referenceId: referenceId,
            value: 20.51,
            callbackUrl: 'http://www.sualoja.com.br/callback',
            returnUrl: `http://www.sualoja.com.br/cliente/pedido/${referenceId}`,
            expiresAt: '2022-05-01T16:00:00-03:00',
            buyer,
        }
    })
    

    it('Make fictitious payment',async()=>{

        const { result,waitForNextUpdate } = renderHook(() => usePickpayHook({xPicpayToken,xSellerToken,baseUrl}));

        act(() => {
            result.current.paymentRequest(payload);

        });

        expect(result.current.error).toBeUndefined();
        expect(result.current.isLoading).toBeTruthy();
        await waitForNextUpdate()
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.error).toBe("Erro: x-picpay-token='5b008cef7f321d00ef2367b2' inválido.");

    })


});