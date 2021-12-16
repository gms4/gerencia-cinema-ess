export class User {

    name: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    senha: string;
    cargo: string;


    constructor(name: string, cpf:string, telefone: string, email: string, 
        endereco: string, senha: string, cargo: string){
        this.name = name;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.senha = senha;
        this.cargo = cargo;
    }
    
}