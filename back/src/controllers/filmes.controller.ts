import { Filme } from './../models/filme';
import { sessaoFilme } from "./../models/sessaoFilme";

export class FilmesController {

    filmes: Filme[] = [];

    constructor(){
    }

    getFilmes(): Filme[]{
        return this.filmes;
    }

}