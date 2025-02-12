

export class ApplicationError extends Error {

    public readonly httpStatusCode: number;

    constructor(message: string, httpStatusCode: number) {
        super(message);
        this.httpStatusCode = httpStatusCode;
    }
}