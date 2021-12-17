import { TelaAreaFuncionarioComponent } from './../tela-area-funcionario/tela-area-funcionario.component';
import { Filme } from 'src/app/models/filme';
import { FilmesService } from '../services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { sessaoFilme } from '../models/sessaoFilme';

@Component({
  selector: 'app-tela-filmes',
  templateUrl: './tela-filmes.component.html',
  styleUrls: ['./tela-filmes.component.css']
})
export class TelaFilmesComponent implements OnInit {

  filmes: Filme[] = [];
  filmeSessao: Filme = new Filme("", "", "", 0, "", "", "", false, "", []);
  telaAtual: boolean = true;

  constructor(private FilmesService: FilmesService) { }

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes(){
    this.FilmesService.getFilmes().subscribe({
      next: (filmes) => {
        this.filmes = filmes;
      },
      error: (error) => {
        alert("Não foi possível obter os filmes do servidor");
      }
    })
  }

  duracaoMinHours(qtdTotalMin: number): string{
    let qtdHours = Math.floor (qtdTotalMin/60);
    let qtdHoursMin : number = qtdTotalMin % 60;

    if (qtdHours == 0){
      return qtdTotalMin + "min";
    }
    if (qtdHoursMin == 0) {
      return qtdTotalMin + "min (" + qtdHours + "h)";  
    }
    if (qtdHoursMin < 10) {
      return qtdTotalMin + "min (" + qtdHours + "h0" + qtdHoursMin + "min)";  
    }
    return qtdTotalMin + "min (" + qtdHours + "h" + qtdHoursMin + "min)";  
  }

  extractHorarios(sessoes: sessaoFilme[]): string{
    let horarios : string = "";
    let iterations : number = 0;

    for(let sessao of sessoes){
      if (iterations == sessoes.length - 1) {
        horarios += sessao.hora;
      }else{
        horarios += sessao.hora + ", ";
      }
      iterations++;
    }
    return horarios;
  }

  toSession(filme: Filme){
    this.telaAtual = !this.telaAtual;
    this.filmeSessao = filme;
  }

}
