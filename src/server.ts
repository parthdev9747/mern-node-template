import app from "./app";
import config from "./config/config";
import logger from "./config/logger";

const startServer = async () => {
    const port = config.port;

    try {
        app.listen(port, () => {
            logger.info(`Server is running ${port}`);
        });
    } catch (error) {
        logger.error(`Failed to listen on ${port}`, error.message);
        setTimeout(() => {
            process.exit(1);
        }, 3000);
    }
};

startServer();
