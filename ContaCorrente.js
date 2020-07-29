import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        } else {
            console.log("Saldo Insuficiente");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } else {
            this.saldo += valor;
            console.log("Deposito permitido somente para valores positivos")
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}