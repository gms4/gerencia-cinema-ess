import { Filme } from './../models/filme';
import { sessaoFilme } from "./../models/sessaoFilme";

export class FilmesController {

    filmes: Filme[] = [];

    constructor(){
    }

    getFilmes(): Filme[]{
        return this.filmes;
    }

    getFilmeByName(nomeFilme: string): Filme | null{
        let filme = this.filmes.find(u => (u.nome == nomeFilme))
        return filme;
    }

    createFilme(nome: string, etaria: string, categorias: string,
        duracao: number, atores: string, premios: string, sinopse: string,
        tipo: string, sessoes: sessaoFilme[]){
            const filme = new Filme (nome, etaria, categorias, duracao, atores, premios, sinopse, false, tipo, sessoes);
            this.filmes.push(filme);
    }
    deduzirTipo(sessoes: sessaoFilme[]): string{
        let fraseFinal = "";
        let legendado = false;
        let tresD = false;
        let dublado = false;

        for(let i = 0; i < sessoes.length; i++){
            if (sessoes[i].tipo == "Legendado"){
                legendado = true;
            } else if (sessoes[i].tipo == "Dublado"){
                dublado = true;
            } else if (sessoes[i].tipo == "Legendado 3D"){
                legendado = true;
                tresD = true;
            } else{ // == "Dublado 3D"
                dublado = true;
                tresD = true;
            }
        }
        
        if (legendado){
            fraseFinal += "Legendado";
        }
        if (dublado){
            fraseFinal += "Dublado";
        }
        if (legendado && dublado){
            fraseFinal = "Legendado e Dublado";
        }
        if (tresD){
            fraseFinal += ", 3D";
        }

        return fraseFinal;
    }
}
