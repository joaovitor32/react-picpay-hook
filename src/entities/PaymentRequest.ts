import { IBuyer } from './Buyer';

export interface IPaymentRequest {

    referenceId: string;
    callbackUrl: string;
    returnUrl: string;
    value: number;
    expiresAt: Date;
    buyer: IBuyer;

}
