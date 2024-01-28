export const getFormattedDate = (dateToFormat: string) => {
  const date = new Date(dateToFormat);
  return `${date.toLocaleString('default', { month: "short" })} ${date.getDay()}, ${date.getFullYear()}`
}
