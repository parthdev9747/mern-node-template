import app from "./app";
import config from "./config/config";

const startServer = async () => {
    const port = config.port;

    try {
        app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running ${port}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);

        process.exit(1);
    }
};

startServer();
