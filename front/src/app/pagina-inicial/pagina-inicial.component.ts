import { Component, OnInit } from '@angular/core';
import { nomesService } from '../services/nomes.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  name: string = "";
  age: number = 0;
  email: string = "";

  constructor(private nomesService: nomesService) { }

  ngOnInit(): void {

    this.name = "";
    this.age = 0;
    this.email = "";
  }

  createUser() {
    this.nomesService.createUser(this.name, this.age, this.email).subscribe({
      next: (message) => {
        this.name = "";
        this.email = "";
        this.age = 0;
        alert(message.message);
      },
      error: (err) => {
        alert(err.error);
      }
    })
  }
  
  getUsers() {
    this.nomesService.getUsers().subscribe({
      next: (users) => {
        console.log(users);
      },
      error: () => {
        alert("Não foi possível obter os usuários do servidor");
      }
    })
  }
}