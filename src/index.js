import parseExtrato from "./parseExtrato.js";

const values = await parseExtrato("data/Extrato-2021-04.csv");

console.log(
  "values: ",
  values.filter((value) => value.valor > 1000)
);

const receitaBruta = values
  .filter(value => !value.description.includes('CDB'))
  .map((value) => value.valor)
  .filter((value) => value > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

const despesas = values
  .filter((value) => !value.description.includes("CDB"))
  .map((value) => value.valor)
  .filter((value) => value < 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("receitaBruta: ", receitaBruta);
console.log("despesas: ", despesas);
console.log("lucro: ", receitaBruta + despesas);


18261.69