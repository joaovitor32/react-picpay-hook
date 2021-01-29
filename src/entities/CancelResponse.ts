export interface ICancelResponse {

    referenceId?:string;
    cancellationId?:string;
    message?:string;
    errors?:any[];


}

export default class CancelResponse {

    referenceId?:string;
    cancellationId?:string;
    message?:string;
    errors?:any[];

    constructor({referenceId,cancellationId,message,errors }: ICancelResponse) {

        this.referenceId= referenceId;
        this.cancellationId = cancellationId;
        this.message = message;
        this.errors = errors;

    }

}