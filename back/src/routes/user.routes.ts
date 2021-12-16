import { Router, Request, Response } from "express";
import { request } from "http";
import { UserController } from "../controllers/user.controller";
import { User } from "../models/user";

const userRouter = Router();

const userController = new UserController();

userRouter.route("/")
    .get((req: Request, res: Response) => {

        let users = userController.getUsers();
        return res.json({ users });

    })
    .post((req: Request, res: Response) => {
        
        let name = req.body.name;
        let cpf = req.body.cpf;
        let telefone = req.body.telefone;
        let email = req.body.email;
        let endereco = req.body.endereco;
        let senha = req.body.senha;
        let cargo = req.body.cargo;
        const resultCreate = userController.createUser(name, cpf, telefone, email, endereco, senha, cargo);

        if (resultCreate == "emailError"){
            return res.status(409).json({ error: "Email já cadastrado!"});
        } else if (resultCreate == "cpfError") {
            return res.status(409).json({ error: "CPF já cadastrado!"});
        } // if (worked correctly)
        return res.json({ message: cargo + " cadastrado com sucesso!"});
    })
    .put((req: Request, res: Response) => {
        return res.json({ Warning: "Método PUT não suportado para a rota /users"});
    })
    .delete((req: Request, res: Response) => {
        return res.json({ Warning: "Método DELETE não suportado para a rota /users"});
    });

userRouter.route("/auth/login")
    .post((req: Request, res: Response) => {

        let emailOrCpf = req.body.emailOrCpf;
        let password = req.body.password;
        let authenticatedUser = userController.authenticate(emailOrCpf, password);

        if (!authenticatedUser) { //usuario nao cadastrado no sistema
            return res.status(404).json({ error: "Não foi possível encontrar essa combinação de CPF (ou email) e senha"});
        }
        return res.json(authenticatedUser);
    });
    /*
    .put((req: Request, res: Response) => {
        let id = parseInt(req.params.id);
        let name = req.body.name;
        let age = parseInt(req.body.age);

        let updateUser = userController.updateUser(id, name, age);
        if (!updateUser) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        } 

        return res.status(200).json({ success: "Usuário atualizado com sucesso." });
    })*/
    
export default userRouter;