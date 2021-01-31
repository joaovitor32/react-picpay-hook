export interface IQrcode {

    content: string;
    base64: string;

}

export interface IPaymentResponse {
    referenceId: string;
    paymentUrl: string;
    expiresAt: string,
    qrcode: IQrcode;

}

