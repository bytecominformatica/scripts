const mensalidades = [
  {
    cliente: "ALAN DAVID PINTO DA COSTA",
    valorAntigo: 60.0,
    valorNovo: 75.0,
    dataUltimaMensalidade: new Date("2021-05-20"),
    dataProximaMensalidade: new Date("2021-06-20"),
    dataTrocaDePlano: new Date("2021-05-26"),
  },
  {
    cliente: "ANGELICA LIMA DA SILVA",
    valorAntigo: 50.0,
    valorNovo: 60.0,
    dataUltimaMensalidade: new Date("2021-05-20"),
    dataProximaMensalidade: new Date("2021-06-20"),
    dataTrocaDePlano: new Date("2021-05-18"),
  },
  {
    cliente: "EVALDO ALVES DE OLIVEIRA",
    valorAntigo: 100.0,
    valorNovo: 100.0,
    dataUltimaMensalidade: new Date("2021-05-20"),
    dataProximaMensalidade: new Date("2021-06-20"),
    dataTrocaDePlano: new Date("2021-05-24"),
  },
  {
    cliente: "GERARDO PAULO DOS SANTOS NETO",
    valorAntigo: 120.0,
    valorNovo: 120.0,
    dataUltimaMensalidade: new Date("2021-05-20"),
    dataProximaMensalidade: new Date("2021-06-20"),
    dataTrocaDePlano: new Date("2021-05-24"),
  },
  {
    cliente: "JOHN GLEISON SOUZA DA ROCHA",
    valorAntigo: 70.0,
    valorNovo: 90.0,
    dataUltimaMensalidade: new Date("2021-05-05"),
    dataProximaMensalidade: new Date("2021-06-05"),
    dataTrocaDePlano: new Date("2021-05-22"),
  },
  {
    cliente: "MARIA FERNANDA DOS SANTOS",
    valorAntigo: 100.0,
    valorNovo: 150.0,
    dataUltimaMensalidade: new Date("2021-05-10"),
    dataProximaMensalidade: new Date("2021-06-10"),
    dataTrocaDePlano: new Date("2021-05-19"),
  },
  {
    cliente: "MARIA FLAVIA DOS SANTOS FEITOSA",
    valorAntigo: 100.0,
    valorNovo: 120.0,
    dataUltimaMensalidade: new Date("2021-05-15"),
    dataProximaMensalidade: new Date("2021-06-15"),
    dataTrocaDePlano: new Date("2021-05-19"),
  },
  {
    cliente: "TERESA CRISTINA DA ROCHA MONTEIRO LIMA",
    valorAntigo: 0.0,
    valorNovo: 75.0,
    dataUltimaMensalidade: new Date("2021-05-10"),
    dataProximaMensalidade: new Date("2021-06-10"),
    dataTrocaDePlano: new Date("2021-05-25"),
  },
];

const daysFrom = (date1, date2) => {
  return (date1 - date2) / (1000 * 60 * 60 * 24);
};

const formatCurrency = (value) =>
  value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

for (let mensalidade of mensalidades) {
  console.log("cliente:", mensalidade.cliente);
  console.log("valor antigo:", formatCurrency(mensalidade.valorAntigo));
  console.log("valor novo:", formatCurrency(mensalidade.valorNovo));
  console.log("troca de plano:", mensalidade.dataTrocaDePlano);
  console.log("ult. mensalidade:", mensalidade.dataUltimaMensalidade);
  console.log("prox. mensalidade:", mensalidade.dataProximaMensalidade);
  const diasNoPlanoAntigo = daysFrom(
    mensalidade.dataTrocaDePlano,
    mensalidade.dataUltimaMensalidade
  );
  const diasNoPlanoNovo = daysFrom(
    mensalidade.dataProximaMensalidade,
    mensalidade.dataTrocaDePlano
  );

  const valorProxMensalidade =
    (mensalidade.valorAntigo / 30) * diasNoPlanoAntigo +
    (mensalidade.valorNovo / 30) * diasNoPlanoNovo;

  console.log("dias no plano antigo:", diasNoPlanoAntigo);
  console.log("dias no plano novo:", diasNoPlanoNovo);
  console.log("valor prox mensalidade:", formatCurrency(valorProxMensalidade));
  console.log(
    valorProxMensalidade > mensalidade.valorNovo ? "acrescimo" : "desconto",
    formatCurrency(Math.abs(valorProxMensalidade - mensalidade.valorNovo))
  );

  console.log("###################################################");
}
