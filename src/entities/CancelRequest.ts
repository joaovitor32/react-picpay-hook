export interface ICancelRequest {
    authorizationId:string;
}

export default class CancelRequest {
    
    authorizationId:string;

    constructor({authorizationId}: ICancelRequest) {
        this.authorizationId=authorizationId;
    }
    
}
