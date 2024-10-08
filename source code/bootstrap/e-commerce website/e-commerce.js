// Special Countdown 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 October 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

// Scroll Back To Top 
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive');
        } else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();


// // nav hide  
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

(() => {
  'use strict';

  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', event => {
      event.preventDefault(); // Prevent default form submission
      event.stopPropagation();

      if (form.checkValidity()) {
          // If form is valid, show success modal
          var successModal = new bootstrap.Modal(document.getElementById('successModal'));
          successModal.show();
      } else {
          // If form is invalid, show error modal
          var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
          errorModal.show();
      }

      form.classList.add('was-validated'); // Add Bootstrap validation styles
  }, false);
})();

function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find(product => product.id === productId);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }
  updateCartTable();
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}

let cart = [];

function updateCartTable() {
  const cartTableBody = document.getElementById('cart-table-body');
  cartTableBody.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>$${product.price}</td>
      <td>$${product.price * product.quantity}</td>
      <td><button class="remove-from-cart" data-product-id="${product.id}">Remove</button></td>
    `;
    cartTableBody.appendChild(row);
    total += product.price * product.quantity;
  });
  document.getElementById('cart-total-price').textContent = total.toFixed(2);
}

