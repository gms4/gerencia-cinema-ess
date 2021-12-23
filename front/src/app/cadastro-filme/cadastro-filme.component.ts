import { Component, OnInit } from '@angular/core';
import { sessaoFilme } from '../models/sessaoFilme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent implements OnInit {

  nomeFilme: string = "";
  categoria: string = "";
  tempoFilme: number = 0;
  atores: string = "";
  premios: string = "";
  sinopse: string = "";
  classificacao: string = "";
  sessoes: sessaoFilme[] = [];

  constructor(private FilmesService: FilmesService) { }

  ngOnInit(): void {
  }

  createFilme() {

    let works = true;

    if(this.sessoes.length == 0){
      works = false;
      alert("Por favor, adicione uma sessão");
    }

    for(let sessao of this.sessoes){
      if(sessao.hora == "" || sessao.sala == "" || sessao.tipo == ""){
        works = false;
        alert("Por favor, preencha todos os campos da sessão");
      }
    }

    if(this.nomeFilme == "" || this.categoria == "" || this.tempoFilme <= 0 || 
    this.atores == "" || this.premios == "" || this.sinopse == "" ||
    this.classificacao == ""){
      works = false;
      alert("Por favor, preencha todos os campos antes de efetuar o cadastro");
    }

    if(works){
      this.FilmesService.createFilme(this.nomeFilme, this.classificacao, this.categoria,
        this.tempoFilme, this.atores, this.premios, this.sinopse, this.sessoes).subscribe({
          next: (message) => {
            this.nomeFilme = "";
            this.classificacao = "";
            this.categoria = "";
            this.tempoFilme = 0;
            this.atores = "";
            this.premios = "";
            this.sinopse = "";
            this.sessoes = [];
            console.log(message);
          },
          error: (err) => {
            alert(err.error.error);
          }
        })
    }
  }

  teste(){
    console.log(this.nomeFilme+"\n");
    console.log(this.categoria+"\n");
    console.log(this.tempoFilme+"\n");
    console.log(this.atores+"\n");
    console.log(this.premios+"\n");
    console.log(this.sinopse+"\n");
    console.log(this.classificacao+"\n");
    console.log(this.sessoes);
  }

  addSessao(){
    this.sessoes.push(new sessaoFilme("", "", "", "Sala Disponivel"));
  }
}
