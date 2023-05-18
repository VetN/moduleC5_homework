
const button = document.querySelector('.btn');
const fieldCard = document.querySelector('.image');
fieldCard.innerHTML = localStorage.getItem('myKey');   
    
function show(data) {
  let cards = '';
  data.forEach(item => {
    const cardBlock = `
      <div class="card">
      <img src="${item.download_url}" class="card-image"/>
      <p>${item.author}</p>
      </div>
      `;
    console.log(item.author);
    cards = cards + cardBlock;
    fieldCard.innerHTML = cards;
    localStorage.setItem('myKey', cards);
  });
}
    
button.addEventListener('click', () => {               
  const pageInput = document.getElementById("page");
  const limitInput = document.getElementById("limit");
  const pageBut = pageInput.value;
  const limitBut = limitInput.value;
  if (isNaN(pageBut) || isNaN(limitBut)) {
    alert('введите числа')
   }
  else if ((pageBut < 1 || pageBut > 10) && (limitBut < 1 || limitBut > 10)) {
    alert("Номер страницы и лимит  вне диапазона от 1 до 10")
    }
  else if (pageBut < 1 || pageBut > 10) {
    alert("Номер страницы вне диапазона от 1 до 10")
    }
  else if (limitBut < 1 || limitBut > 10) {
    alert("Лимит вне диапазона от 1 до 10")
    }
  else {
    const url = `https://picsum.photos/v2/list?page=${pageBut}&limit=${limitBut}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {
        show(data);
      })
      .catch(() => {
        console.log('error');
        fieldCard.innerHTML = '<p> Ошибка. Повторите запрос еще раз</p>'
      });
    }
  pageInput.value = '';
  limitInput.value = '';// очистка поля
  localStorage.setItem('myKey', cards);
});   