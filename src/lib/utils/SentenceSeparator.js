export const Splitter = (item) => {
  let sentence = item.split(" ");
  const toUppercase = sentence.map((i) => {
    return `${i[0].toUpperCase()}${i.slice(1)}`;
  });
  return toUppercase.join("-")
};

export const Titler = (item) => {
    let sentence = item.split(" ");
  const toUppercase = sentence.map((i) => {
    return `${i[0].toUpperCase()}${i.slice(1)}`;
  });
  return toUppercase.join(" ")
}
