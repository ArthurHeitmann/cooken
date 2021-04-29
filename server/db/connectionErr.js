class IncorrectUserError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        this.message = message || "IncorrectUserError";
    }
}

module.exports = IncorrectUserError;