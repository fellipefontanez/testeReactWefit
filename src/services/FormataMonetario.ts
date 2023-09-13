export const formatoMonetario = (numero: number) =>
  numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
