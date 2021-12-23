import { Sessao } from './../models/sessao';
import { Sala } from '../models/sala';

export class SessoesSalaController {

    salas: Sala[];

    constructor () {
        this.salas = [];
    }

    getSalasByNumber(sala: number): Sala{
        return this.salas[sala-1];
    }
    
    attSala(cadeirasSessoes: string [][], hora:string, numSala : string, qtdIngressosRestantes : number){
        let numeroSala: number = parseInt(numSala) - 1;
        for(let a = 0; a < this.salas[numeroSala].sessoes.length; a++){
            if(this.salas[numeroSala].sessoes[a].hora == hora){
                this.salas[numeroSala].sessoes[a].qtdIngressosRestantes = qtdIngressosRestantes;
                this.salas[numeroSala].sessoes[a].cadeirasSessao = cadeirasSessoes;
                return "worked";
            }
        }
        return "not worked";
    }

}