import { config as conf } from "dotenv";
conf();

const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV,
};

export default config;
