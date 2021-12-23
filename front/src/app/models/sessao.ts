export class Sessao {

    qtdIngressosRestantes: number;//calculado como (qtdCadeiras - vendidos)
    hora: string;
    tipo: string; //dublado ou legendado, sala comum ou 3d
    cadeirasSessao: string[][];

    constructor(qtdFileiras: number, qtdColunas: number, hora: string, tipo: string) {
        this.qtdIngressosRestantes = qtdFileiras*qtdColunas;
        this.hora = hora;
        this.tipo = tipo;
        this.cadeirasSessao = [];

        for(let i = 0; i < qtdFileiras; i++){
            this.cadeirasSessao[i] = [];
            for(let j = 0; j < qtdColunas; j++){
                this.cadeirasSessao[i][j] = "true";//true = desocupada, "false = ocupada"
            }
        }
    }
}