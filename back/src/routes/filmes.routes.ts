import { Router, Request, Response } from "express";
import { request } from "http";
import { FilmesController } from "../controllers/filmes.controller";

const filmesRouter = Router();

const filmesController = new FilmesController();

filmesRouter.route("/")
    .get((req: Request, res: Response) => {
        let filmes = filmesController.getFilmes();
        return res.json(filmes);
    })
    .post((req: Request, res: Response) => {
        return res.json({ Warning: "Ainda será desenvolvido"});
    })
    .put((req: Request, res: Response) => {
        return res.json({ Warning: "Ainda será desenvolvido"});
    });
    
export default filmesRouter;