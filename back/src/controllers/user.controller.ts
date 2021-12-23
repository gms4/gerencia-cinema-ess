import { User } from "../models/user";

export class UserController {

    users: User[];

    constructor () {
        this.users = [];
    }

    getUsers() : User[] {
        return this.users;
    }

    createUser(name: string, cpf:string, telefone: string, email: string, 
        endereco: string, senha: string, cargo: string): string {
        if (this.users.find(u => u.email == email)) {
            return "emailError";
        }else if (this.users.find(u => u.cpf == cpf)) {
            return "cpfError";
        }
        const newUser = new User(name, cpf, telefone, email, endereco, senha, cargo);
        this.users.push(newUser);
        return "worked";
    }
    authenticate(emailOrCpf: string, password: string): User {
        let user = this.getUserByEmailOrCPF(emailOrCpf);

        if (user) {//usuario encontrado
            if (user.senha == password)
                return user;
            else
                user = null;
        }
        return user;
    }

    getUserByEmailOrCPF(emailOrCpf: string): User | null{
        const user = this.users.find(u => (u.cpf == emailOrCpf || u.email == emailOrCpf));
        return user;
    }

}