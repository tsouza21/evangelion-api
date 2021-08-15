import logger from '../config/logger';
import BaseError from './baseError';

class ErrorHandler {
  handleError(error: Error | BaseError): void {
    logger.error('An error has occurred', error);
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }

  public getErrorData(error: Error): ErrorData {
    if (error instanceof BaseError) {
      return {
        status: error.httpStatus,
        data: {
          code: error.code,
          message: error.message,
        },
      };
    }
    return {
      status: 500,
      data: {
        code: 'UnexpectedError',
        message: 'An unexpected error has occurred',
      },
    };
  }
}

export default new ErrorHandler();
