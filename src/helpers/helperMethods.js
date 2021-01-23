import lodash from "lodash";

export const getNumber = () => {
  return Math.floor(Math.random() * 99999999999);
};

let names = [
  "Aditya",
  "Udit",
  "Anshu",
  "Abhishek",
  "Krishna Sir",
  "Adi",
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt",
  "Arjun",
  "Udit",
  "Krish",
  "Adit",
  "Peter",
  "Jhon",
  "Bob",
];

export let randomName = () => lodash.random(names);

export let randomElement = names[lodash.random(names.length - 1)];
