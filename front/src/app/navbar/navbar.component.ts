import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  link: string = "/cadastro";
  hasLoggedUser: boolean = false;

  constructor(private AuthenticationService: AuthenticationService) { 
  }

  ngOnInit(): void {
    this.hasLoggedUser = (this.AuthenticationService.getLoggedUser() != null);
    //Se o usuario logado nao for nulo, hasLoggedUser sera true
    this.changeClienteFunc();
  }

  changeClienteFunc(){
    if (this.hasLoggedUser) {
      let cargo = this.AuthenticationService.getLoggedUser()?.cargo;
      if (cargo == "funcionario") {
        this.link = "/cadastroFuncionario";
        return;
      }
    } 
      this.link = "/cadastro"
  }

}
