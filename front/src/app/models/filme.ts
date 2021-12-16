import { sessaoFilme } from "./sessaoFilme";

export class Filme{

    nome: string;
    etaria: string;
    categorias: string;
    duracao: number; //em minutos, que pode ser interpretado para horas
    atores: string;
    premios: string;
    sinopse: string;
    arquivado: boolean;

//---------DEDUZIDO------------
    tipo: string; //dublado e/ou legendado, sala comum e/ou 3d
    sessoes: sessaoFilme[];
//A cada modificação no filmes, devemos atualizar os deduzidos
//------------------------------

    constructor (nome: string, etaria: string, categorias: string, duracao: number,
        atores: string, premios: string, sinopse: string, arquivado: boolean,
        tipo: string, sessoes: sessaoFilme[]){
            this.nome = nome;
            this.etaria = etaria;
            this.categorias = categorias;
            this.duracao = duracao;
            this.atores = atores;
            this.premios = premios;
            this.sinopse = sinopse;
            this.arquivado = arquivado;
            this.tipo = tipo;
            this.sessoes = sessoes;
    }
}
