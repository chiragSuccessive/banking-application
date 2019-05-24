import { config } from 'dotenv';

config();

const envVars = process.env;

const configuration = Object.freeze({
    port: envVars.PORT || 5000,
    mongo_url: envVars.MONGO_URL,
});
export default configuration;