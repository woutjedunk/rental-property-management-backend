

export class ApplicationError extends Error {

    public readonly applicationErrorResponse: string;
    public readonly status: number;

    constructor(message: string, status: number, applicationErrorResponse: string) {
        super(message);
        this.status = status;
        this.applicationErrorResponse = applicationErrorResponse;
    }
}