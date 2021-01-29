export interface IQrcode {

    content: string;
    base64: string;

}

export interface IPaymentResponse {

    referenceId?: string;
    paymentUrl?: string;
    expiresAt?: Date,
    qrcode?: IQrcode;
    message?: string;
    errors?: any[]

}

export default class PaymentResponse {

    referenceId?: string;
    paymentUrl?: string;
    expiresAt?: Date;
    qrcode?: IQrcode;
    message?: string;
    errors?: any[]

    constructor({ referenceId, paymentUrl, expiresAt, qrcode, message, errors }: IPaymentResponse) {

        this.referenceId = referenceId;
        this.paymentUrl = paymentUrl;
        this.expiresAt = expiresAt;
        this.qrcode = qrcode;
        this.message = message;
        this.errors = errors;

    }

}