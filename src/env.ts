import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

type Environment = Record <string, any>;

const defaults: Environment = {
  CONFIG_PATH: path.resolve(__dirname, '..', '.env'),
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: 3000,
  DEBUG: true,
};

const env: Environment = {
  ...defaults,
  ...getEnv(),
  ...process.env
};

process.env = env;

export default env;

function getEnv () {
  const configPath = defaults.CONFIG_PATH;

  if (!fs.existsSync(configPath)) return {};

  return dotenv.parse(fs.readFileSync(configPath, { encoding: 'utf-8' }));
}
