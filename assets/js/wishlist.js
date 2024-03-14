const tbody = document.getElementById("wishlistTableBody");
let comingWishData = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistTable() {
  let tr = "";
  comingWishData.forEach((item, index) => {
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

updateWishlistTable();

function clearWishlist() {
  localStorage.removeItem('wishlist');
  comingWishData = []; 
  updateWishlistTable();
  alert('Favorileriniz temizlendi.');
  location.reload(); 
}
