import express from "express";
import homeRouter from "./home-router";
import songRouter from "./song-router";

const rootRouter = express.Router();

rootRouter.use("/", homeRouter);
rootRouter.use('/songs', songRouter);

export default rootRouter;
