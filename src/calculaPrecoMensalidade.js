const mensalidades = [
  {
    cliente: "AUGUSTO CESAR DE ARAUJO",
    valorAntigo: 70.0,
    valorNovo: 75.0,
    dataUltimaMensalidade: new Date("2021-06-10"),
    dataProximaMensalidade: new Date("2021-07-10"),
    dataTrocaDePlano: new Date("2021-06-23"),
  },
  {
    cliente: "JACKSON PINHEIRO SILVA",
    valorAntigo: 0.0,
    valorNovo: 60.0,
    dataUltimaMensalidade: new Date("2021-06-05"),
    dataProximaMensalidade: new Date("2021-07-05"),
    dataTrocaDePlano: new Date("2021-06-16"),
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
