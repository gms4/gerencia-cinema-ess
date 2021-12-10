import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro-cliente',
  templateUrl: './tela-cadastro-cliente.component.html',
  styleUrls: ['./tela-cadastro-cliente.component.css']
})
export class TelaCadastroClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  teste(): number{
    return 2;
  }

}
