export const numberToCurrency = (value?: number) => {
  const numberFormat = (value || 0.0).toFixed(2).replace(".", ",");

  if (numberFormat) {
    const [valuePart, decimalPart] = numberFormat.split(",");

    const stringFormated = `${parseFloat(valuePart || "0").toLocaleString(
      "pt-BR"
    )},${decimalPart || "00"}`;

    return stringFormated;
  }
  return "0,00";
};
