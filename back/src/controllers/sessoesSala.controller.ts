import { sessaoFilme } from './../models/sessaoFilme';
import { Sessao } from './../models/sessao';
import { Sala } from '../models/sala';

export class SessoesSalaController {

    private static instance: SessoesSalaController;
    salas: Sala[] = [new Sala("", 5, 15, []), new Sala("", 5, 15, []), new Sala("", 5, 15, []), new Sala("", 5, 15, []), new Sala("", 5, 15, [])];

    
    constructor () {
    }
    
    public static getInstance(): SessoesSalaController{
        if (!SessoesSalaController.instance){
            SessoesSalaController.instance = new SessoesSalaController();
        }
        return SessoesSalaController.instance;
    }

    getSalasByNumber(sala: number): Sala{
        return this.salas[sala-1];
    }

    newFilmeOnSala(nomeFilme: string, sessoes: sessaoFilme[]){
        for(let i = 0; i <= sessoes.length-1; i++){
            let numSala = parseInt(sessoes[i].sala) - 1;
            this.salas[numSala].nomeFilme = nomeFilme;
            this.salas[numSala].sessoes.push(this.sessaoFilmeToSessao(sessoes[i]));
        }       
    }

    sessaoFilmeToSessao(sessao: sessaoFilme): Sessao{
        const novaSessao = new Sessao(5, 15, sessao.hora, sessao.tipo);
        return novaSessao;
    }

    salaIsEmpty(numSala : number): boolean{
        if (this.salas[numSala-1].nomeFilme == ""){
            return true;
        }
        return false;
    }
    orderByHora(sessoesFilme: sessaoFilme[]): sessaoFilme[]{
        for(let i=0; i < sessoesFilme.length-1; i++){
            for(let j=0; j < sessoesFilme.length-i-1; j++){
                let hora1 = this.stringHoraToMin(sessoesFilme[j].hora);         
                let hora2 = this.stringHoraToMin(sessoesFilme[j+1].hora);
        
                if(hora1 > hora2){
                    let aux = sessoesFilme[j];
                    sessoesFilme[j] = sessoesFilme[j+1];
                    sessoesFilme[j+1] = aux;
                }
            }
        }
        return sessoesFilme;
    }  
    stringHoraToMin (hora: string): number{ //recebido como "XX:XX"
        let qtdMin = parseInt(hora) * 60;
        qtdMin += parseInt(hora.slice(3)); 
        return qtdMin;
    }
    hasConflict(sessoesFilme: sessaoFilme[], duracaoFilme: number): boolean{
        for(let i = 0; i < sessoesFilme.length-1; i++){
            let hora1 = this.stringHoraToMin(sessoesFilme[i].hora);  
            let hora2 = this.stringHoraToMin(sessoesFilme[i+1].hora);

            if ((hora2 - hora1) <= (duracaoFilme+30)){
                return true; //conflito encontrado
            }
        }
        if (sessoesFilme.length >= 2){
            let hora1 = this.stringHoraToMin(sessoesFilme[0].hora);
            hora1 += 1440;
            let hora2 = this.stringHoraToMin(sessoesFilme[sessoesFilme.length-1].hora); 

            if (hora1 - hora2 <= duracaoFilme+30){
                return true; //conflito encontrado
            }
        }        
        return false;
    }
} 