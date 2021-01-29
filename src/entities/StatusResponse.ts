export interface IStatusResponse {
    
    authorizationId?:string;
    referenceId?:string;
    status?:string;
    message?:string;
    errors?:any[];

}

export default class StatusResponse {
    
    authorizationId?:string;
    referenceId?:string;
    status?:string;
    message?:string;
    errors?:any[];


    constructor({authorizationId,referenceId,status,message,errors}: IStatusResponse) {
      
        this.authorizationId = authorizationId;
        this.referenceId = referenceId;
        this.status = status;
        this.message = message;
        this.errors = errors;

    }
    
}
