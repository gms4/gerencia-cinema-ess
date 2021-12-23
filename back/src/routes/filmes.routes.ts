import { SessoesSalaController } from './../controllers/sessoesSala.controller';
import { sessaoFilme } from './../models/sessaoFilme';
import { Router, Request, Response } from "express";
import { FilmesController } from "../controllers/filmes.controller";

const filmesRouter = Router();

const filmesController = new FilmesController();
const sessoesSalaController = SessoesSalaController.getInstance();

filmesRouter.route("/")
    .get((req: Request, res: Response) => {
        let filmes = filmesController.getFilmes();
        return res.json(filmes);
    })
    .post((req: Request, res: Response) => {

        //---------Preparando Variaveis----------//
        let resultado: string = "";
        let tipo: string = "";

        let nome: string = req.body.nome;
        let etaria: string = req.body.etaria;
        let categorias: string = req.body.categorias;
        let duracao: number = req.body.duracao;
        let atores: string = req.body.atores;
        let premios: string = req.body.premios;
        let sinopse: string = req.body.sinopse; 
        let sessoes: sessaoFilme[] = req.body.sessoes;

        let sessoesSala1: sessaoFilme[] = [];
        let sessoesSala2: sessaoFilme[] = [];
        let sessoesSala3: sessaoFilme[] = [];
        let sessoesSala4: sessaoFilme[] = [];
        let sessoesSala5: sessaoFilme[] = [];

        //dividindo sessoes por sala
        for (let i = 0; i < sessoes.length; i++) {
            if(sessoes[i].sala == "1"){
                sessoesSala1.push (sessoes[i]);
            } else if (sessoes[i].sala == "2"){
                sessoesSala2.push (sessoes[i]);
            } else if (sessoes[i].sala == "3"){
                sessoesSala3.push (sessoes[i]);
            } else if (sessoes[i].sala == "4"){
                sessoesSala4.push (sessoes[i]);
            } else{
                sessoesSala5.push (sessoes[i]);
            }
        }

        sessoesSala1 = sessoesSalaController.orderByHora(sessoesSala1);
        sessoesSala2 = sessoesSalaController.orderByHora(sessoesSala2);
        sessoesSala3 = sessoesSalaController.orderByHora(sessoesSala3);
        sessoesSala4 = sessoesSalaController.orderByHora(sessoesSala4);
        sessoesSala5 = sessoesSalaController.orderByHora(sessoesSala5);

        //---------Analise para insercao----------//

        //Verificar se existe um filme com esse nome (olhar se existe algum filme cadastrado com o nome)
        let filmeEncontrado = filmesController.getFilmeByName(nome); //Verifica se existe algum filme cadastrado com o nome
        if (filmeEncontrado){
            resultado = "errorFilmeJaCadastrado";
        //Verificar se todas as salas que esse filme será inserido estarão vazias
        } else if ( (sessoesSala1.length > 0 && !sessoesSalaController.salaIsEmpty(1)) || 
                    (sessoesSala2.length > 0 && !sessoesSalaController.salaIsEmpty(2)) || 
                    (sessoesSala3.length > 0 && !sessoesSalaController.salaIsEmpty(3)) || 
                    (sessoesSala4.length > 0 && !sessoesSalaController.salaIsEmpty(4)) || 
                    (sessoesSala5.length > 0 && !sessoesSalaController.salaIsEmpty(5)) ){
                        resultado = "errorSalaOcupada";
        //Verificar se existe conflito entre as sessoes que serao cadastradas
        } else if ( (sessoesSala1.length > 0 && sessoesSalaController.hasConflict(sessoesSala1, duracao)) || 
                    (sessoesSala2.length > 0 && sessoesSalaController.hasConflict(sessoesSala2, duracao)) || 
                    (sessoesSala3.length > 0 && sessoesSalaController.hasConflict(sessoesSala3, duracao)) || 
                    (sessoesSala4.length > 0 && sessoesSalaController.hasConflict(sessoesSala4, duracao)) || 
                    (sessoesSala5.length > 0 && sessoesSalaController.hasConflict(sessoesSala5, duracao)) ){
                    resultado = "errorConflito";
        //Cadastrando filme
        } else {
            tipo = filmesController.deduzirTipo(sessoes);
            sessoes = sessoesSala1.concat(sessoesSala2).concat(sessoesSala3).concat(sessoesSala4).concat(sessoesSala5);

            filmesController.createFilme(nome, etaria, categorias, duracao, atores, premios, sinopse, tipo, sessoes);
            sessoesSalaController.newFilmeOnSala(nome, sessoes);

            resultado = "filmeCorreto";

            if (resultado == "errorFilmeJaCadastrado"){
                return res.status(409).json({ error: "Um filme com esse nome já esta cadastrado"});
            } else if (resultado == "errorSalaOcupada") {
                return res.status(409).json({ error: "Uma das salas esta ocupada"});
            } else if (resultado == "errorConflito"){
                return res.status(409).json({ error: "Sessoes Conflitantes"});
            } // if (worked correctly)
            return res.json({ message: "Filme cadastrado com sucesso!"});
        }
        
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