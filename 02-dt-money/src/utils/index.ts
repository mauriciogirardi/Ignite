/* eslint-disable import/no-anonymous-default-export */

export default {
  formattedDate: (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  },

  formattedCurrency: (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "currency",
    }).format(value);
  },
};
