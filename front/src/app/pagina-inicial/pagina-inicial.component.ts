import { Component, OnInit } from '@angular/core';
import { NomesService } from '../services/nomes.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  nome: string = "";
  nomes: string[] = []

  constructor(private nomesService: NomesService) { }

  ngOnInit(): void {
  }

  adicionarNome(): void {
    if (this.nome.length >= 3){
      this.nomesService.adicionarNome(this.nome);
      this.listarNomes();
      this.nome = "";
      return;
    }
    alert("O nome deve ter no mínimo 3 letras");
  }

  removerNome(index: number): void {
    this.nomesService.removerNome(index);
  }

  listarNomes(){
    this.nomes = this.nomesService.obterNomes();
  }

}
