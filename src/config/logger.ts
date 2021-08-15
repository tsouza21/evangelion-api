import path from 'path';
import * as winston from 'winston';
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';
import { isDevEnvironment } from '../helpers/env';

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
};

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf(info => {
    const { timestamp, level, message, ...meta } = info;

    const metaInfo = Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '';

    return `${timestamp} [${level}]: ${message} ${metaInfo}`;
  }),
);

class Logger {
  private logger: winston.Logger;
  public readonly options: winston.LoggerOptions;

  constructor() {
    this.options = {
      level: this.getLevel(),
      levels: customLevels.levels,
      transports: [this.getTransport()],
    };

    this.logger = winston.createLogger(this.options);

    winston.addColors(customLevels.colors);
  }

  private getLevel(): string {
    return isDevEnvironment() ? 'trace' : 'error';
  }

  private getTransport(): ConsoleTransportInstance | FileTransportInstance {
    if (isDevEnvironment()) {
      return new winston.transports.Console({
        format: formatter,
      });
    }
    return new winston.transports.File({
      filename: path.resolve('..', 'logs', 'error.log'),
    });
  }

  trace(msg: any, meta?: any) {
    this.logger.log('trace', msg, meta);
  }

  debug(msg: any, meta?: any) {
    this.logger.debug(msg, meta);
  }

  info(msg: any, meta?: any) {
    this.logger.info(msg, meta);
  }

  warn(msg: any, meta?: any) {
    this.logger.warn(msg, meta);
  }

  error(msg: any, meta?: any) {
    this.logger.error(msg, meta);
  }

  fatal(msg: any, meta?: any) {
    this.logger.log('fatal', msg, meta);
  }
}

export default new Logger();
