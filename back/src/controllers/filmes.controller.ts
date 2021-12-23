import { Filme } from './../models/filme';
import { sessaoFilme } from "./../models/sessaoFilme";

export class FilmesController {

    filmes: Filme[] = [];

    constructor(){
        let filme = new Filme("Filme1", "Filme1", "Filme1", 5, "Filme1", "Filme1", "Filme1", false, "Filme1", [new sessaoFilme("Sala1", "15:30", "Dublado", "Lotada"), new sessaoFilme("Sala1", "12:30", "Dublado", "Sala Disponivel")]);
        this.filmes.push(filme);
        filme = new Filme("Filme2", "Filme2", "Filme2", 5, "Filme2", "Filme2", "Filme2", false, "Filme2", [new sessaoFilme("Sala1", "00:30", "Dublado", "Lotada"), new sessaoFilme("Sala1", "10:30", "Dublado", "Sala Disponivel")]);
        this.filmes.push(filme);
        filme = new Filme("Filme3", "Filme3", "Filme3", 5, "Filme3", "Filme3", "Filme3", false, "Filme3", 
        [new sessaoFilme("Sala2", "01:00", "Dublado", "Lotada"), new sessaoFilme("Sala2", "22:00", "Dublado", "Sala Disponivel"), 
        new sessaoFilme("Sala2", "23:00","Dublado", "Sala Disponivel"), new sessaoFilme("Sala2", "23:00", "Dublado","Sala Disponivel"), 
        new sessaoFilme("Sala2", "23:00","Dublado", "Sala Disponivel"), new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), 
        new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), 
        new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), 
        new sessaoFilme("Sala2", "23:00", "Dublado", "Sala Disponivel"), new sessaoFilme("Sala2", "23:00","Dublado", "Sala Disponivel") ]);
        this.filmes.push(filme);
        filme = new Filme("Filme4", "Filme4", "Filme4", 5, "Filme4", "Filme4", "Filme4", false, "Filme4", [new sessaoFilme("Sala1", "05:30","Dublado", "Lotada"), new sessaoFilme("Sala1", "10:30","Dublado", "Sala Disponivel")]);
        this.filmes.push(filme);
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
