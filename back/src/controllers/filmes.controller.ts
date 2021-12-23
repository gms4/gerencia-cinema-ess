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

}