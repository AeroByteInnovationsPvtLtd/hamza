let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });