export class sessaoFilme{
    //Esse model e uma versao simplificada de sessao e sala
    //Feito para que nao fosse necessaria a duplicacao de informacao

    sala: string;
    tipo: string;
    hora: string;
    lotacao: string;

    constructor (sala: string, hora: string, tipo: string, lotacao: string){
        this.sala = sala;
        this.tipo = tipo;
        this.hora = hora;
        this.lotacao = lotacao;
    }
}
