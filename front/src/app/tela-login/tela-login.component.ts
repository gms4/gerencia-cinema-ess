import { Router } from '@angular/router';
import { User } from './../models/user';
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
  LoggedUser: User | null;

  constructor(private AuthenticationService: AuthenticationService, private router: Router) { 
    this.emailOrCpf = "";
    this.password = "";
    this.LoggedUser = null;
  }

  ngOnInit(): void {
    this.LoggedUser = this.AuthenticationService.getLoggedUser();
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
          this.LoggedUser = user;
          this.AuthenticationService.setUserLogado(user);
          this.router.navigate([""]);//muda tela para a tela de filmes
        },
        error: (err) => {
          alert (err.error.error);
        }
      })
    }
  }
  logout(){
    this.LoggedUser = null;
    this.AuthenticationService.setUserLogado(null);
  }
  
}
