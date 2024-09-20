import { config as conf } from 'dotenv';
conf();

const config = {
    port: process.env.PORT,
};

export default config;
