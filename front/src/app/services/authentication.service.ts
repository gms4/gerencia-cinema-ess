import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogado: User|null;

  constructor(private http: HttpClient) { 
    this.userLogado = null;
  }

  login(emailOrCpf: string, password: string):Observable<User>{
    return this.http.post<User>(`${environment.url}/user/auth/login`, 
    {
      emailOrCpf: emailOrCpf,
      password: password
    });
  }
  getUsuarioLogado(): User|null{
    return this.userLogado;
  }
  setUserLogado(user: User|null){
    this.userLogado = user;
  }
}