/*
Написать код:
 ВВести в input любое  число 
провести проверку числа от 1 до 10
если подходит, то сделать запрос, где число кол-во фото
если нет, то вывести текст, что число вне диапазона


     функция-обертка осуществляет запрос
    (адрес по которому осущ запрос и вызов callback функции, если запрос удачен) */

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();  // xhr- это запрос
    xhr.open('GET', url, true);      // на запрос вешаем обработчики
    xhr.onload = function() {     // обработчик onload срабат когда получаем рез-т от сервера
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response); // response - возвращ удачный запрос и распарсиваем его и превр js объект
        if (callback) {
            callback(result);
        }
        }
    };
    xhr.onerror = function() { // обрабатывает ошибки
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    xhr.send(); // вызывается и осуществ запрос, после того, как повесили все обработчики
};


function displayResult(apiData) {
    let cards = '';
    console.log('start cards', cards);
    apiData.forEach(item => {
        const cardBlock = `
         <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
         <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });
    fieldCard.innerHTML = cards;
}


//доступ к кнопке и полю вывода
const button = document.querySelector('.btn');
const fieldCard = document.querySelector('.image');


 // функция проверки ввода и вызова функции запроса с функцией callback                
function checkNum () {
  const numInput = document.getElementById("numcard");
  const numValue = numInput.value;
  //console.log("2", numValue);
    if (numValue > 0 && numValue <= 10) {
        useRequest(`https://picsum.photos/v2/list/?limit=${numValue}`, displayResult);
    } else {
        alert("число вне диапазона")
    }
    numInput.value = ''; // очистка поля
};

button.onclick = checkNum;
   