import lodash from "lodash";

export const getNumber = () => {
  return Math.floor(Math.random() * 1000000000);
};

let names = ["Aditya", "Udit", "Anshu", "Abhishek", "Krishna Sir", "Arjun", 'Udit', 'Krish', "Adit", 'Peter', 'Jhon', 'Bob', 'Adi'];

export let randomName = () => lodash.random(names);

export let randomElement = names[lodash.random(names.length - 1)];