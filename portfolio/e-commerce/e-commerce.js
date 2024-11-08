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


// nav hide  
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const modalBody = document.querySelector('#modal-body');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    modalBody.textContent = 'Please fill in all fields.';
    $('#exampleModal').modal('show');
    return;
  }

  if (!validateEmail(email)) {
    modalBody.textContent = 'Invalid email address.';
    $('#exampleModal').modal('show');
    return;
  }

  // if all data is valid, display success message
  modalBody.textContent = 'Your info has been submitted successfully.';
  $('#exampleModal').modal('show');
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

