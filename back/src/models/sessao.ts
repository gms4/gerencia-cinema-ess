export class Sessao {

    qtdIngressosRestantes: number;//calculado como (qtdCadeiras - vendidos)
    hora: string;
    dia: string;
    tipo: string; //dublado ou legendado, sala comum ou 3d
    cadeirasSessao: boolean[][];

    constructor(qtdFileiras: number, qtdColunas: number, hora: string, 
    dia: string, tipo: string) {
        this.qtdIngressosRestantes = qtdFileiras*qtdColunas;
        this.hora = hora;
        this.dia = dia;
        this.tipo = tipo;

        this.cadeirasSessao;
        
    }
}