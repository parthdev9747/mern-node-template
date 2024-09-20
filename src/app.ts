import express from "express";
import createHttpError from "http-errors";

const app = express();

app.get("/", async (req, res, next) => {
    const error = createHttpError(500, "Something went wrong");
    return next(error);
});

export default app;
