import * as express from 'express';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.status(404).json({
    code: 'ResourceNotFound',
    message: 'This resource is unavailable or does not exist'
  });
}
