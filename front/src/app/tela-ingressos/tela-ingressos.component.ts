import { SharedDataService } from './../services/shared-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-ingressos',
  templateUrl: './tela-ingressos.component.html',
  styleUrls: ['./tela-ingressos.component.css']
})
export class TelaIngressosComponent implements OnInit {

  constructor(private SharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }

}
