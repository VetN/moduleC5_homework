// Преобразование JSON в JS-объект
// Перебором for
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


// Получение данных
const person = JSON.parse(dataList);
//console.log(person);
const res = person.list;
//console.log(res);

//Запись результатов
const resAll =[];
for (let i = 0; i <= res.length-1; i++) {
    resAll.push ({
        name: res[i].name,
        age: Number(res[i].age),
        prof: res[i].prof,
    });
}
  

    
//console.log(resAll);
console.log(`list: [ { name: ${resAll[0].name}, age: ${resAll[0].age}, prof:${resAll[0].prof}},
{name:${resAll[1].name}, age: ${resAll[1].age}, prof:${resAll[1].prof}},] `)
