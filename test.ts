const choose = (array: string[]): string => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const data: string[] = [
  "Franklin",
  "Rosalie",
  "Alma",
  "Connor",
  "Theresa",
  "Celia",
  "Sophie",
];
const answer = choose(data);
console.log(answer);
