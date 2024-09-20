import winston from "winston";
import config from "./config";

const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "auth-service",
    },
    transports: [
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "app.log",
            level: "info",
            silent: config.env === "test",
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
            silent: config.env === "test",
        }),
    ],
});

export default logger;
