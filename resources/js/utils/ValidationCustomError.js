export class ValidationCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationCustomError";
    }
}