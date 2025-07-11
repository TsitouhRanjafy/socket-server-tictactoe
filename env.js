import { configDotenv } from 'dotenv';

configDotenv();

export const env = () => {
    if (!process.env.PORT) throw new Error("PORT not found on .env file");
    if (!process.env.CORS_ORIGIN) throw new Error("CORS_ORIGIN not found on .env file");
    if (!process.env.CORS_ORIGIN_DEV) throw new Error('CORS_ORIGIN_DEV not found on .env file');
    return {
        port: process.env.PORT,
        cors_origin: process.env.CORS_ORIGIN,
        cors_origin_dev: process.env.CORS_ORIGIN_DEV
    }
}