import { SessoesSalaController } from './../controllers/sessoesSala.controller';
import { Router, Request, Response } from "express";
import { request } from "http";
import { UserController } from "../controllers/user.controller";

const sessoesSalaRouter = Router();
const sessoesSalaController =  new SessoesSalaController();

// sessoesSalaRouter.route("/:numeroSala")
//     .get((req: Request, res: Response) => {
//         /*
//             Deve retornar todas as sessoes da sala especificada (req.params.numeroSala)
//         */
//         return res.json ({Warning: "Essa rota ainda sera desenvolvida"});
//     })
//     .post((req: Request, res: Response) => {
//         /*
//             Deve criar nova sessao em uma determinada sala (req.params.numeroSala), 
//             a sessao nova sera recebida pelo req.body
//         */
//        return res.json({Warning: "Essa rota ainda sera desenvolvida"});
//     });
    
    sessoesSalaRouter.route("/:numeroSala/:horario")
    .get((req: Request, res: Response) => {
        /*
        Deve retornar a sessao especificada da sala especificada
        (req.params.numeroSala e req.params.horario)
        */
       
       
       return res.json ({warning: "Essa rota ainda sera desenvolvida"});
    })
    .post((req: Request, res: Response) => { 
        /*
            Deve retornar a sessao especificada da sala especificada
            (req.params.numeroSala e req.params.horario)
        */ 
        return res.json({warning: "Essa rota ainda sera desenvolvida"});
    })
    .put((req: Request, res: Response) => {
        /*
            Deve modificar a qtd de ingressos e o array de cadeiras da sessaoSala
            (req.params.numeroSala e req.params.horario), quando a lotaçao mudar para
            75% ou 100%, deve alterar o valor na sessaoFilme do filme
        */

        let numSala = req.body.numSala;
        let qtdIngressosRestantes = req.body.qtdIngressosRestantes;
        let hora = req.body.hora;
        let cadeirasSessao = req.body.cadeirasSessao;

        const resultAtt = sessoesSalaController.attSala(cadeirasSessao, hora, numSala, qtdIngressosRestantes);
        if(resultAtt == "not worked"){
            return res.status(409).json({ error: "Compra não efetuada"});
        }else{
            return res.status(200).json({ message: "Compra realizada"});
        }
        //return res.json({ Warning: "Essa rota ainda sera desenvolvida"});
    });
    
export default sessoesSalaRouter;