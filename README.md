## Usage - (Concept)

```tsx
import React from 'react';
import usePickpayHook from usePickpayHook';

interface ComponentsProps{
  baseUrl:string;
  xPicpayToken:string;
  xSellerToken:string;
}

const Component: React.FC<ComponentsProps> = ({baseUrl,xPicpayToken,xSellerToken}) => {
   
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
   
    const { paymentRequest } = usePickpayHook({baseUrl,xPicpayToken,xSellerToken});
  
    return (<button onClick={()=>paymentRequest(payload)} >Request Payment</button>)


};

export default Component;
```
