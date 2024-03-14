const PAGE_SIZE = 10;
let currentPage = 1;
let totalItems = 0;
let products = [];

function fetchData() {
  fetch("http://127.0.0.1:5501/assets/js/data/products.json")
    .then(res => res.json())
    .then(data => {
      products = data;
      totalItems = products.length;
      displayData();
    })
    .catch(err => console.log(err));
}

function displayData(filteredProducts = null) {
  const productList = document.querySelector('.prodrow');
  if (!productList) {
    return;
  }

  let productsToDisplay = filteredProducts ? filteredProducts : products;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalItems);
  const currentProducts = productsToDisplay.slice(startIndex, endIndex);

  let li = "";
  currentProducts.forEach(item => {
    li += `
      <div style="border: 0px;" class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Price: <span class="font-weight-bolder">${item.price}.00$</span></p>
            <button type="button" class="btn btn-outline-secondary addToCartBtn">Add to Cart</button>
            <button type="button" class="btn btn-outline-danger addToWishlistBtn"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
    `;
  });

  productList.innerHTML = li;

  document.querySelectorAll('.addToCartBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      const parentDiv = btn.closest('.col-12');
      const image = parentDiv.querySelector('img').src;
      const title = parentDiv.querySelector('.card-title').textContent.trim();
      const price = parseFloat(parentDiv.querySelector('.font-weight-bolder').textContent.trim().replace('$', ''));

      const product = {
        image: image,
        title: title,
        price: price
      };

      let basketData = JSON.parse(localStorage.getItem('basket')) || [];
      basketData.push(product);
      localStorage.setItem('basket', JSON.stringify(basketData));

      alert('Məhsul əlavə olundu!');
    });
  });

  document.querySelectorAll('.addToWishlistBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      const parentDiv = btn.closest('.col-12');
      const image = parentDiv.querySelector('img').src;
      const title = parentDiv.querySelector('.card-title').textContent.trim();
      const price = parseFloat(parentDiv.querySelector('.font-weight-bolder').textContent.trim().replace('$', ''));

      const product = {
        image: image,
        title: title,
        price: price
      };

      let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlistData.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));

      alert('Product added to wishlist!');
    });
  });
}

function nextPage() {
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  if (currentPage < totalPages) {
    currentPage++;
    displayData();
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayData();
  }
}

function searchProducts() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchTerm);
  });

  displayData(filteredProducts);
}

fetchData();
