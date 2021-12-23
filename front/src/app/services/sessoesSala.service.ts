import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao';

@Injectable({
  providedIn: 'root'
})

export class SessoesSalaService {

  constructor(private http: HttpClient) { }

  attSala (sessaoSala: Sessao, numSala: string | undefined): Observable<any> {
  return  this.http.put<any>(`${environment.url}/`+ numSala + `/` + sessaoSala.hora, sessaoSala);
 }
}