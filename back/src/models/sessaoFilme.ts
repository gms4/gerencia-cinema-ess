export class sessaoFilme{
    //Esse model e uma versao simplificada de sessao e sala
    //Feito para que nao fosse necessaria a duplicacao de informacao

    sala: string;
    hora: string;

    constructor (sala: string, hora: string){
        this.sala = sala;
        this.hora = hora;
    }
}
