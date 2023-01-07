export function capitalize(str, lower = false) {
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
}

// For database formatted datetime string
export function getFormattedDate(str) {
  let formattedDate = "";
  const date = new Date(str);

  const d = date.getDate(),
    m = date.getMonth() + 1,
    y = date.getFullYear();

  d < 10 ? (formattedDate += "0" + d + "/") : (formattedDate += d + "/");
  m < 10 ? (formattedDate += "0" + m + "/") : (formattedDate += m + "/");
  formattedDate += y;

  return formattedDate;
}
