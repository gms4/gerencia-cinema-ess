import { Sessao } from './sessao';
export class Sala{

    nomeFilme: string;
    qtdFileiras: number;
    qtdColunas: number;
    sessoes: Sessao[];

    constructor(filme :string, qtdFileiras: number, qtdColunas: number, sessoes: Sessao[]){
        this.nomeFilme = filme;
        this.qtdFileiras = qtdFileiras;
        this.qtdColunas = qtdColunas;
        this.sessoes = sessoes;
    }
}