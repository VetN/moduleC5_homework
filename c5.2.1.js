// Преобразовать XML в JS-объект и вывести рез-т в консоль

const xmlString = `
<list>   
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
</list>
`;

const list = [];

// создание экземпляра класса DOMParser
const parser = new DOMParser();

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const students = xmlDOM.querySelectorAll('student');

// перебор и получение данных 
students.forEach(function (item) {
    const nameNode = item.querySelector("name");
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");

    //получение данных антрибута
    const langAttr = nameNode.getAttribute('lang');
    
    // если надо было бы глубже
    //const firstNode = nameNode.querySelector("first");
    //const secondNode = nameNode.querySelector("second");
    
    // запись результатов
    list.push({
        name: nameNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    });
}); 
// вывод в консоль объекта
//console.log(list)
console.log(`list: {name:${list[0].name}, age:${list[0].age}, prof:${list[0].prof}, lang:${list[0].lang}}`);
console.log(`list: {name:${list[1].name}, age:${list[1].age}, prof:${list[1].prof}, lang:${list[1].lang}}`);




