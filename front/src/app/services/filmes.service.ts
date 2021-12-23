import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filme } from 'src/app/models/filme';
import { sessaoFilme } from '../models/sessaoFilme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${environment.url}/filmes`);
  }

  createFilme(nome: string, etaria: string, categorias: string,
  duracao: number, atores: string, premios: string, sinopse: string, 
  sessoes: sessaoFilme[]): Observable<any> {
    
    let filme = new Filme(nome, etaria, categorias, duracao,
      atores, premios, sinopse, false, "", sessoes);

    return this.http.post<any>(`${environment.url}/filmes`, filme);
  }

}
