let dolarBugun = 20;

let dolarDun = 19;
dolarDun = "19";

{
  let dolarDun = 19;
}

console.log(dolarDun);

const euroDun = 21;
//euroDun = 21;

console.log(euroDun);

//array
//camelCasing
//PascalCasing
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
  "Özel Konut Kredisi",
];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

console.log("</ul>");

console.log(konutKredileri);
