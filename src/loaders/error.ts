import errorHandler from '../errors/errorHandler';

export default function errorLoader() {
  process.on('unhandledRejection', (error: Error) => {
    throw error;
  });

  process.on('uncaughtException', (error: Error) => {
    errorHandler.handleError(error);
    if (!errorHandler.isTrustedError(error)) {
      process.exit(1);
    }
  });
}
