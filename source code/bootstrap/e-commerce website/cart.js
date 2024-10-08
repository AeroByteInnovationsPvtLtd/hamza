// cart.js
let cart = [];

// Function to add product to cart
function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find(product => product.id === productId);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }
  updateCartTable();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update cart table
function updateCartTable() {
  const cartTableBody = document.getElementById('cart-table-body');
  cartTableBody.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>₹${product.price}</td>
      <td>₹${product.price * product.quantity}</td>
      <td><button class="remove-from-cart" data-product-id="${product.id}">Remove</button></td>
    `;
    cartTableBody.appendChild(row);
    total += product.price * product.quantity;
  });
  document.getElementById('cart-total-price').textContent = total.toFixed(2);
}

// Function to remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  updateCartTable();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Event listener for remove from cart button
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-from-cart')) {
    const productId = event.target.getAttribute('data-product-id');
    removeFromCart(productId);
  }
});

// Load cart from local storage
cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart table on page load
updateCartTable();