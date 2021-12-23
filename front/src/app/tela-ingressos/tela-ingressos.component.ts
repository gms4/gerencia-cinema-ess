import { sessaoFilme } from './../models/sessaoFilme';
import { SharedDataService } from './../services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { faChair, faChevronCircleLeft, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Sessao } from '../models/sessao';
import { AuthenticationService } from '../services/authentication.service';
import { User } from './../models/user';
import { SessoesSalaService } from '../services/sessoesSala.service';

@Component({
  selector: 'app-tela-ingressos',
  templateUrl: './tela-ingressos.component.html',
  styleUrls: ['./tela-ingressos.component.css']
})
export class TelaIngressosComponent implements OnInit {
  LoggedUser: User | null;

  constructor(private SharedDataService: SharedDataService, private router: Router, 
  private AuthenticationService: AuthenticationService, private SessoesSalaService: SessoesSalaService) { 
    this.LoggedUser = null;
  }

  //Variaveis recebidas ao inicializar
  filme : Filme | null = null;
  sessaoFilme : sessaoFilme | null = null;
  sessaoSala : Sessao = new Sessao(5,20,"22:00", "Dublado"); //essa sessao deve receber um get da sessao cadastrada na sala do servidor
  //sessaoSala : Sessao | null = null;

  
  //Icones
  seta = faChevronCircleLeft;
  cadeiraIcon = faChair;
  ticket = faTicketAlt;

  //Variaveis de Ingressos
  ingressoInteira : number = 0;
  ingressoMeia: number = 0;
  qtdCadeirasSelecionadas: number = 0;
  valorTotal: number = 0;
  numSala: string | undefined = "";
  

  ngOnInit(): void {
    this.filme = this.SharedDataService.getFilmeSelecionado();
    this.sessaoFilme = this.SharedDataService.getsessaoFilmeSelecionada();
    this.SharedDataService.setFilmeSelecionado(null);
    this.SharedDataService.setsessaoFilmeSelecionada(null);
    
  }

  toTelaFilmes(){
    this.router.navigate(["/"]); 
  }

  calcularValor(): number{
    this.valorTotal = this.ingressoInteira*10 + this.ingressoMeia*5
    return this.valorTotal;
  }

  checarCompra(): void{
    if ((this.ingressoMeia + this.ingressoInteira) != this.qtdCadeirasSelecionadas){
      alert("A quantidade de ingressos e cadeiras selecionadas deve ser a mesma!");
    }
    else if (!this.isLogged()){
      alert("Você precisa logar primeiro.");
      this.router.navigate(["/login"]);
    }
    else {
      //alert("Compra concluída com sucesso!");
      this.ocuparSala();
      //this.router.navigate([""]);
    }
    return;
  }
  
  isLogged(): boolean{
   this.LoggedUser = this.AuthenticationService.getLoggedUser();
   if(this.LoggedUser == null){
     return false;
   }
    return true;
  }

  ocuparSala() {
    for(let i = 0; i < this.sessaoSala.fileiras; i++){
      for(let j = 0; j < this.sessaoSala.colunas; j++){
          if(this.sessaoSala.cadeirasSessao[i][j] == "selecionada"){
            this.sessaoSala.cadeirasSessao[i][j] = "false";//true = desocupada, "false = ocupada"
            this.sessaoSala.qtdIngressosRestantes --;
          }
      }
    }
    this.numSala = this.sessaoFilme?.sala;
    this.SessoesSalaService.attSala(this.sessaoSala, this.numSala).subscribe({
      next: (message) => {
        console.log(message);
        alert(message.message);
      },
      error: (err) => {
        alert(err.error.error);
      }
    })
}

  clickCadeira(i: number, j: number): void{
    let cadeiraClicada = this.sessaoSala.cadeirasSessao[i][j];
    if (cadeiraClicada == "true"){
      this.sessaoSala.cadeirasSessao[i][j] = "selecionada";
      this.qtdCadeirasSelecionadas++;
    }else if(cadeiraClicada == "selecionada"){
      this.sessaoSala.cadeirasSessao[i][j] = "true";
      this.qtdCadeirasSelecionadas--;
    }//quando "== false", nao fazer nada
  }
}
