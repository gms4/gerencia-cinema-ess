import { sessaoFilme } from './../models/sessaoFilme';
import { SharedDataService } from './../services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { faChair, faChevronCircleLeft, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Sessao } from '../models/sessao';

@Component({
  selector: 'app-tela-ingressos',
  templateUrl: './tela-ingressos.component.html',
  styleUrls: ['./tela-ingressos.component.css']
})
export class TelaIngressosComponent implements OnInit {

  constructor(private SharedDataService: SharedDataService, private router: Router) { }

  //Variaveis recebidas ao inicializar
  filme : Filme | null = null;
  sessaoFilme : sessaoFilme | null = null;
  sessaoSala : Sessao = new Sessao(5,20,"22:00", "Dublado"); //essa sessao deve receber um get da sessao cadastrada na sala do servidor
  
  //Icones
  seta = faChevronCircleLeft;
  cadeiraIcon = faChair;
  ticket = faTicketAlt;

  //Variaveis de Ingressos
  ingressoInteira : number = 0;
  ingressoMeia: number = 0;
  qtdCadeirasSelecionadas: number = 0;


  ngOnInit(): void {
    this.filme = this.SharedDataService.getFilmeSelecionado();
    this.sessaoFilme = this.SharedDataService.getsessaoFilmeSelecionada();
    this.SharedDataService.setFilmeSelecionado(null);
    this.SharedDataService.setsessaoFilmeSelecionada(null);
  }

  toTelaFilmes(){
    this.router.navigate(["/"]); 
  }

  clickCadeira(i: number, j: number){
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
