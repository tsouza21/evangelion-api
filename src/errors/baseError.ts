class BaseError extends Error {
  public readonly code: string;
  public readonly httpStatus: number;
  public readonly isOperational: boolean;

  constructor(code: string, message: string, httpStatus: number, isOperational: boolean) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.code = code;
    this.httpStatus = httpStatus;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export default BaseError;
