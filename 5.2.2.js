// Преобразование JSON в JS-объект
const dataList= `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

const resultAll = [];
// Получение данных
const person = JSON.parse(dataList);
//console.log(person)
const listPersons = person.list;
listPersons.forEach(function (item) {
    resultAll.push({
        name: item.name,
        age: Number(item.age),
        prof: item.prof,
    });
});
    
//console.log(resultAll);
console.log(`list: [ { name:${resultAll[0].name}, age:${resultAll[0].age}, prof:${resultAll[0].prof}},
{ name:${resultAll[1].name}, age:${resultAll[1].age}, prof:${resultAll[1].prof}},]`);