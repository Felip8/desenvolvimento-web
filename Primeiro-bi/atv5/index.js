const valorConta = 100;

const percentualGorjeta = 15;

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotalPago = valorConta + valorGorjeta;

console.log("\n========================");

console.log(
  `Valor da conta: R$${valorConta},00 \nGorjeta(15%): ${percentualGorjeta},00 \nTotal a pagar: R$${valorTotalPago},00`,
);

console.log("========================");
