import express from "express";
//import createHttpError from "http-errors";

const app = express();

app.get("/", async (req, res) => {
    // FOr error handler
    // const error = createHttpError(500, "Something went wrong");
    // return next(error);
    return res.status(200).send("Send request");
});

export default app;
