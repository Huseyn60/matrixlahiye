const tbody = document.querySelector("tbody");
const comingBasketData = JSON.parse(localStorage.getItem("basket"));

if (!comingBasketData) {
  console.error("Basket data is null or undefined");
} else {
  let tr = "";

  comingBasketData.forEach((item, index) => {
    tr += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td><img width="70" src="${item.image}" alt="product image" /></td>
        <td>${item.title}</td>
        <td>${item.price}$</td>
      </tr>`;
  });

  tbody.innerHTML = tr;
}

function clearBasket() {
  localStorage.removeItem('basket');
  location.reload(); 
  alert('Səbətiniz təmizlənsinmi?');
}
