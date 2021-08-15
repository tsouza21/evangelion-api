import * as express from 'express';
import errorHandler from '../errors/errorHandler';

export default (error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler.handleError(error);
  if (errorHandler.isTrustedError(error)) {
    const { status, data } = errorHandler.getErrorData(error);
    return res.status(status).json(data);
  }
  next(error);
};
