export const choose = (array: string[]): string => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const firstNames: string[] = [
  "Franklin",
  "Rosalie",
  "Alma",
  "Connor",
  "Theresa",
  "Celia",
  "Sophie",
  "Gary",
  "Verna",
  "Arthur",
  "Sallie",
  "Bess",
  "Bessie",
  "Martin",
  "Virginia",
];

export const lastNames: string[] = [
  "Edwards",
  "Shelton",
  "Haynes",
  "Cunningham",
  "Miller",
  "Porter",
  "Obrien",
  "Roy",
  "Cain",
  "Alexander",
  "Harmon",
  "Walsh",
  "Marshall",
  "Bradley",
  "Cobb",
];
