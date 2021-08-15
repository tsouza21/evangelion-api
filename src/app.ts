import express from 'express';
import cors from 'cors';

import env from './env';
import router from './router';
import loader from './loaders';

const app = express();

app.disable('x-powered-by');

app.use(express.json());

app.use(cors());

loader.load(app);

const port = env.PORT;

const runningMessage = `Evangelion API is running at http://localhost:${port}`;

app.use(router);

app.listen(port, () => {
  console.log(runningMessage);
});
