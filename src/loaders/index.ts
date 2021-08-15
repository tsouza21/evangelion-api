import * as express from 'express';
import errorLoader from './error';

class Loader {
  public load(_app: express.Application) {
    errorLoader();
  }
}

export default new Loader();
