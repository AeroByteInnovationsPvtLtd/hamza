let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

function openPopup() {
    document.getElementById('popup-bg').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-bg').style.display = 'none';
}

// Form submission handler
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    alert('Appointment booked successfully!');
    closePopup(); // Close the popup after booking
});