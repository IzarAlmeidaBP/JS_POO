class Cliente {
  nome;
  cpf;
}
class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  deposito(valor) {
    if (this.valor > 0) {
      this._saldo += valor;
      return valor;
    }
  }
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;

cliente2.nome = "Maria";
cliente2.cpf = 88822233301;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
