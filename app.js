// Get DOM elements
const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');
const loginBtn = document.querySelector('#login-btn');
const menuBtn = document.querySelector('#menu-btn');
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');

// Toggle search form
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// Toggle cart box
cartBtn.onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// Toggle login form
loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
};

// Toggle navbar
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
};

// Hide all when scrolling
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper2 = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon between moon and sun
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
  } else {
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
  }

  // Optional: Save preference in localStorage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// On load, apply preference
document.addEventListener('DOMContentLoaded', () => {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));
  if (darkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
  }
});