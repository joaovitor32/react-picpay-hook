import Buyer, { IBuyer } from './Buyer';

export interface IPaymentRequest {

    referenceId: string;
    callbackUrl: string;
    returnUrl: string;
    value: number;
    expiresAt: Date;
    buyer: IBuyer;

}

export default class PaymentRequest {

    referenceId: string;
    callbackUrl: string;
    returnUrl: string;
    value: number;
    expiresAt: Date;
    buyer: IBuyer;

    constructor({ referenceId, callbackUrl, returnUrl, value, expiresAt, buyer }: IPaymentRequest) {

        this.referenceId = referenceId;
        this.callbackUrl = callbackUrl,
            this.returnUrl = returnUrl;
        this.value = value;
        this.expiresAt = expiresAt;

        this.buyer = new Buyer(buyer);

    }

}