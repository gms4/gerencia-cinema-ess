import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro-funcionario',
  templateUrl: './tela-cadastro-funcionario.component.html',
  styleUrls: ['./tela-cadastro-funcionario.component.css']
})
export class TelaCadastroFuncionarioComponent implements OnInit {

  cadastroAtual: string = "Cliente";

  constructor() { }

  ngOnInit(): void {
  }
  mudarCadastro(tipoCadastro:string): void{
    this.cadastroAtual = tipoCadastro;
  }
}
