// ============ DARK MODE TOGGLE ============
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// ============ CART LOGIC ============
let cart = [];

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const dropdownCartTotal = document.querySelector(".shopping-cart .total");
  cartItemsContainer.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button class="remove-btn" data-index="${index}">❌</button>
    `;
    cartItemsContainer.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
  if (dropdownCartTotal) dropdownCartTotal.textContent = `Total: $${total.toFixed(2)}`;

  // Add event listeners to remove buttons
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const index = this.dataset.index;
      cart.splice(index, 1);
      updateCart();
    });
  });
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", function () {
    const name = this.dataset.name;
    const price = parseFloat(this.dataset.price);

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
    alert(`${name} added to cart!`);
  });
});

// ============ PAYMENT MODAL ============
const paymentModal = document.getElementById("payment-modal");
const placeOrderBtn = document.getElementById("place-order-btn");
const closeModalBtn = document.querySelector(".close-btn");
const payAmountInput = document.getElementById("pay-amount");

placeOrderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  payAmountInput.value = total.toFixed(2);
  paymentModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  paymentModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === paymentModal) {
    paymentModal.style.display = "none";
  }
});

function completePayment() {
  alert("Payment successful! Thank you for shopping with AGRIVIQ ENTERPRISES.");
  cart = [];
  updateCart();
  paymentModal.style.display = "none";
}

// ============ SWIPER SLIDER ============
const swiper = new Swiper(".review-slider", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// ============ TOGGLE SEARCH, LOGIN, CART DROPDOWN ============
const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector(".search-form");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.querySelector(".login-form");
const cartBtn = document.getElementById("cart-btn");
const cartDropdown = document.querySelector(".shopping-cart");

searchBtn.addEventListener("click", () => {
  searchForm.style.display = searchForm.style.display === "block" ? "none" : "block";
  loginForm.style.display = "none";
  cartDropdown.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
  searchForm.style.display = "none";
  cartDropdown.style.display = "none";
});

cartBtn.addEventListener("click", () => {
  cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
  searchForm.style.display = "none";
  loginForm.style.display = "none";
});

// Close forms on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".icons") && !e.target.closest(".search-form") && !e.target.closest(".login-form") && !e.target.closest(".shopping-cart")) {
    searchForm.style.display = "none";
    loginForm.style.display = "none";
    cartDropdown.style.display = "none";
  }
});

// ============ CHAT INPUT (Placeholder Logic) ============
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;
  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + message;
  messagesDiv.appendChild(userMessage);

  // Simple bot response (Placeholder)
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: Thanks for your message, we’ll respond soon!";
    messagesDiv.appendChild(botMessage);
  }, 1000);

  messageInput.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
// Mobile Hamburger Menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// 9-Dot Apps Menu
const dotMenu = document.getElementById("dotMenu");
const menuContainer = document.querySelector(".menu-container");

dotMenu.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const method = document.querySelector('input[name="method"]:checked').value;
    
    // Here you would typically handle the payment processing logic
    // For this example, we will just alert the user
    alert(`Payment Details:
    Name: ${name}
    Email: ${email}
    Payment Method: ${method}`);
});
