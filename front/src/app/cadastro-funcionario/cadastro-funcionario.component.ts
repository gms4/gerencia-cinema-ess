import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  name: string = "";
  cpf: string = "";
  telefone: string = "";
  email: string = "";
  endereco: string = "";
  senha: string = "";

  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  createUser() {
    if (this.name == "" || this.cpf == "" || this.telefone == "" || 
      this.email == "" || this.endereco == "" || this.senha == "") {
        alert("Por favor, preencha todos os campos antes de efetuar o cadastro");
    }else{
      this.userService.createUser(this.name, this.cpf, this.telefone, this.email, 
        this.endereco, this.senha, "funcionario").subscribe({
        next: (message) => {
          this.name = "";
          this.cpf = "";
          this.telefone = "";
          this.email = "";
          this.endereco = "";
          this.senha = "";
          alert(message.message);
        },
        error: (err) => {
          alert(err.error.error);
        }
      })
    }
  }
}
