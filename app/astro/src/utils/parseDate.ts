function parseDate(datestring: Date | string | undefined) {
  if (!datestring) return undefined;
  const date = new Date(datestring);
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default parseDate;
