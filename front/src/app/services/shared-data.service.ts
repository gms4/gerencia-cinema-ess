import { sessaoFilme } from './../models/sessaoFilme';
import { Filme } from 'src/app/models/filme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private filmeSelecionado: Filme | null;
  private sessaoFilmeSelecionada: sessaoFilme | null;

  constructor() { 
    this.filmeSelecionado = null;
    this.sessaoFilmeSelecionada = null;
  }

  getFilmeSelecionado(): Filme | null{
    return this.filmeSelecionado;
  }
  
  getsessaoFilmeSelecionada(): sessaoFilme | null{
    return this.sessaoFilmeSelecionada;
  }
  
  setFilmeSelecionado(filmeSelecionado: Filme | null){
    this.filmeSelecionado = filmeSelecionado;
  }

  setsessaoFilmeSelecionada(sessaoFilmeSelecionada: sessaoFilme | null){
    this.sessaoFilmeSelecionada = sessaoFilmeSelecionada;
  }

  removeFilmeSelecionado(){
    this.filmeSelecionado = null;
  }

  removeSalaSelecionada(){
    this.sessaoFilmeSelecionada = null
  }
}