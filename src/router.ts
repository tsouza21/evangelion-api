import { Request, Response, Router } from 'express';

import notFoundMiddleware from './middlewares/notFound';
import errorMiddleware from './middlewares/error';

import characterRouter from './controllers/character';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Evangelion API is okay');
});

router.use('/characters', characterRouter);

router.use(notFoundMiddleware);
router.use(errorMiddleware);

export default router;
