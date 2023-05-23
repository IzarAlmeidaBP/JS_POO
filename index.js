import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;

cliente2.nome = "Maria";
cliente2.cpf = 88822233301;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
contaCorrente1.deposito(500);
console.log(contaCorrente1);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrente1.tranferir(200, conta2);

console.log(contaCorrente1);
console.log(conta2);
