import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  emailOrCpf: string;
  password: string;

  constructor(private AuthenticationService: AuthenticationService) { 
    this.emailOrCpf = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  login(): void{
    if (this.emailOrCpf == "") {
      alert("Por favor, digite o seu CPF ou Email");
    }else if (this.password == "") {
      alert("Por favor, digite a sua senha");
    }else{
      this.AuthenticationService.login(this.emailOrCpf, this.password).subscribe({
        next: (user) => {
          this.emailOrCpf = "";
          this.password = "";
          this.AuthenticationService.setUserLogado(user);
          //navegar para a tela de filmes
        },
        error: (err) => {
          alert (err.error.error);
        }
      })
    }
  }
}
