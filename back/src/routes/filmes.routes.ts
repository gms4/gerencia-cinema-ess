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
        /*
            Deve verificar se o filme está com todos os atributos necessarios
            para ser cadastrado
            Deve cadastrar o filme enviado no body no filmesController,
            suas sessoes devem ser cadastradas na sala especificada, 
            OBS1: Seus dois atributos devem ser deduzidos nesse post
            OBS2: Filmes arquivados não podem cadastrar sessoes e nem ter
            atributos deduzidos
        */
        return res.json({ Warning: "Ainda será desenvolvido"});
    })
    .put((req: Request, res: Response) => {
        /*
            Deve modificar APENAS filmes arquivados e deve verificar se tem
            todos os atributos necessarios para ser cadastrado
            OBS1: Caso o filme tenha atributos suficientes para deixar de 
            ser arquivado, seus atributos devem ser deduzidos aqui e suas
            sessoes devem ser cadastradas no sessoesSala
        */
        return res.json({ Warning: "Ainda será desenvolvido"});
    });
    
export default filmesRouter;