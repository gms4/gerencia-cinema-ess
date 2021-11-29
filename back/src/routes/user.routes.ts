import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.route("/")
    .get((req: Request, res: Response) => {
        return res.json({Hello: "World!"});
    });

export default userRouter;