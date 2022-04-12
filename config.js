const { NODE_ENV: env } = process.env;
export const ENV = env === 'production' ? env : 'development';
