export interface INotificationRequest {
    authorizationId: string;
    referenceId: string;
}

export default class CancelRequest {

    authorizationId: string;
    referenceId: string;

    constructor({ authorizationId, referenceId }: INotificationRequest) {
        this.authorizationId = authorizationId;
        this.referenceId = referenceId;
    }

}
