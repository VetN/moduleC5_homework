/*
Написать код:
 ВВести в input два числа
провести проверку на числа и на интервал  от 100 до 300
если подходит, то сделать запрос, где числа ширина и высота фото
если нет, то вывести текст, что числа вне диапазона

    //доступ к кнопке и полю вывода*/
const button = document.querySelector('.btn');
const fieldCard = document.querySelector('.image');
    
button.addEventListener('click', () => {               
  const sizeInput_1 = document.getElementById("size_1");
  const sizeInput_2 = document.getElementById("size_2");
  const size_1 = sizeInput_1.value;
  const size_2 = sizeInput_2.value;
  console.log('1');
  if (isNaN(size_1) || isNaN(size_2)) {
      alert('введите числа')
      }
  else if (size_1 < 100 || size_1 > 300 || size_2 < 100 || size_2 > 300) {
      alert("число вне диапазона")
 } else {
    const url = `https://picsum.photos/${size_1}/${size_2}`;
    console.log(url);
    fetch(url)
      .then(response => response.blob())
      .then(blob => URL.createObjectURL(blob))
      .catch(() =>  {
        console.log('error');
        fieldCard.innerHTML = '<p> Ошибка. Повторите запрос еще раз</p>'
       })
      const card = `<img src=${url}/>`
      fieldCard.innerHTML = card;
  }
    sizeInput_1.value = '';
    sizeInput_2.value = '';// очистка поля
    });