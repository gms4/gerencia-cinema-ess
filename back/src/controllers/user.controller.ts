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
/*
    updateUser(id: number, name: string, age: number): boolean {
        let userIndex = this.users.findIndex(u => u.id == id);
        
        if (userIndex == -1) {//retorna -1 se não encontrar ninguém
            return false;
        }

        this.users[userIndex].age = age;
        this.users[userIndex].name = name;
        return true;

    }
*/
}