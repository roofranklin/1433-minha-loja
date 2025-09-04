import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

console.log('--- Bem-vindo à Minha Loja! ---');

// Criando instâncias dos clientes
const cliente1 = new Cliente(1, 'João da Silva', 'joao@email.com');
const cliente2 = new Cliente(2, 'Maria Souza', 'maria@email.com');

console.log('\n--- Clientes Cadastrados ---');
console.log(cliente1);
console.log(`Email do cliente 2: ${cliente2.email}`); 

// Criando instâncias dos pedidos
const pedido1 = new Pedido(101, new Date());
const pedido2 = new Pedido(102, new Date());

console.log('\n--- Pedidos Criados ---');
console.log(`Total do pedido 1: R$ ${pedido1.total.toFixed(2)}`);

console.log('\n--- Sistema finalizado ---');

