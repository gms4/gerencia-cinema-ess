import { TelaAreaFuncionarioComponent } from './../tela-area-funcionario/tela-area-funcionario.component';
import { Filme } from 'src/app/models/filme';
import { FilmesService } from '../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-filmes',
  templateUrl: './tela-filmes.component.html',
  styleUrls: ['./tela-filmes.component.css']
})
export class TelaFilmesComponent implements OnInit {

  filmes: Filme[] = [];

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
}
