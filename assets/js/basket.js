const tbody = document.querySelector("tbody");
const comingBasketData = JSON.parse(localStorage.getItem("basket"));

if (!comingBasketData) {
  console.error("Sepet verisi tanımsız veya boş");
} else {
  let tr = "";

  comingBasketData.forEach((item, index) => {
    tr += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td><img width="70" src="${item.image}" alt="ürün resmi" /></td>
        <td>${item.title}</td>
        <td data-price="${item.price}">${item.price}$</td>
        <td>
          <button class="btn btn-outline-secondary" onclick="miktarAzalt(this)">-</button>
          <span class="miktar">1</span>
          <button class="btn btn btn-outline-danger" onclick="miktarArtir(this)">+</button>
        </td>
        <td>
          <button class="btn btn-danger" onclick="removeItem(this)">Kaldır</button>
        </td>
      </tr>`;
  });

  tbody.innerHTML = tr;
}

function removeItem(button) {
  const row = button.closest("tr");
  const index = row.rowIndex - 1;
  let basketData = JSON.parse(localStorage.getItem("basket"));
  basketData.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basketData));
  location.reload();
}

function miktarArtir(dugme) {
  var miktarElementi = dugme.parentElement.querySelector('.miktar');
  var miktar = parseInt(miktarElementi.innerText);
  miktarElementi.innerText = miktar + 1;
  updatePrice(dugme);
}

function miktarAzalt(dugme) {
  var miktarElementi = dugme.parentElement.querySelector('.miktar');
  var miktar = parseInt(miktarElementi.innerText);
  if (miktar > 1) {
      miktarElementi.innerText = miktar - 1;
      updatePrice(dugme);
  }
}

function updatePrice(button) {
  var row = button.closest("tr");
  var priceCell = row.querySelector('td:nth-child(4)');
  var miktarElementi = row.querySelector('.miktar');
  var price = parseFloat(priceCell.dataset.price); 
  var miktar = parseInt(miktarElementi.innerText);
  var totalPrice = price * miktar;
  priceCell.innerText = totalPrice.toFixed(2) + '$';
}



function clearBasket() {
  localStorage.removeItem('basket');
  location.reload(); 
}