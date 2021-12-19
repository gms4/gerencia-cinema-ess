import { SessoesSalaController } from './../controllers/sessoesSala.controller';
import { Router, Request, Response } from "express";
import { request } from "http";
import { UserController } from "../controllers/user.controller";

const sessoesSalaRouter = Router();
const sessoesSalaController =  new SessoesSalaController();

sessoesSalaRouter.route("/:numeroSala")
    .get((req: Request, res: Response) => {
        return res.json ({Warning: "Essa rota ainda sera desenvolvida"});
    })
    .post((req: Request, res: Response) => {
        return res.json({Warning: "Essa rota ainda sera desenvolvida"});
    });

sessoesSalaRouter.route("/:numeroSala/:horario")
    .get((req: Request, res: Response) => {
        return res.json ({warning: "Essa rota ainda sera desenvolvida"});
    })
    .post((req: Request, res: Response) => { 
        return res.json({warning: "Essa rota ainda sera desenvolvida"});
    })
    .put((req: Request, res: Response) => {
        return res.json({ Warning: "Essa rota ainda sera desenvolvida"});
    });
    
export default sessoesSalaRouter;