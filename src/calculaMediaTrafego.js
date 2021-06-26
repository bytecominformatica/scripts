import parseCSV from "./parseCSV.js";

const values = await parseCSV(
  "data/Relatório Dados Clientes_2021-06-26 10_15_36.csv"
);

const planos = values
  .map((it) => it.Plano)
  .map((it) =>
    it
      .replace("Fibra", '')
      .replace("Ethernet", '')
      .replace("Rádio", '')
      .replace("high", '')
      .replace("High", '')
      .replace("speed", '')
      .replace("Speed", '')
      .replace("-", '')
      .replace('MB', '')
      .replaceAll('"', '')
      .trim()
  )
  .map(it => parseInt(it, 10));


  const somatoriaDosPlanos = planos.reduce((previousValue, currentValue) => previousValue + currentValue);

  console.log("total de planos", planos.length);
  console.log("soma dos MB dos planos", somatoriaDosPlanos, 'MB');
  console.log("media dos MB", somatoriaDosPlanos / planos.length, 'MB');
  console.log("consumoAproximadoBaseadoNaQuanditadeDeClientesDaEpoca", somatoriaDosPlanos / planos.length * 256, 'MB');

// const receitaBruta = values
//   .filter(value => !value.description.includes('CDB'))
//   .map((value) => value.valor)
//   .filter((value) => value > 0)
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

// const despesas = values
//   .filter((value) => !value.description.includes("CDB"))
//   .map((value) => value.valor)
//   .filter((value) => value < 0)
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log("receitaBruta: ", receitaBruta);
// console.log("despesas: ", despesas);
// console.log("lucro: ", receitaBruta + despesas);
