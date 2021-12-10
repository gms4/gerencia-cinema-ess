import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  createUser (name: string, cpf:string, telefone: string, email: string, 
    endereço: string, senha: string, cargo: string): Observable<any> {

    const user = new User(name, cpf, telefone, email, endereço, senha, cargo);
    return this.http.post<any>(`${environment.url}/user`, user);
    
  }
}