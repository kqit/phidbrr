const slider = [
  "image/ảnhbv6.jpg",
  "image/anrhbv8.jpg",
  "image/ảnhbv7.jpg",
  "https://tamanhhospital.vn/wp-content/uploads/2021/02/phong-noi-tru-thoang-dang1.jpg",
  "https://tamanhhospital.vn/wp-content/uploads/2021/04/ky-thuat-chup-mri.jpg",
];

let sliderSRC = document.querySelector(".img-slider");
let radios = document.querySelectorAll(".radio");
let currentSlider = 1;

const repeat = () => {
  setInterval(() => {
    if (currentSlider >= slider.length) {
      currentSlider = 0;
    }
    radios.forEach((radio, i) => {
      radio.classList.remove("active");
    });
    radios[currentSlider].classList.add("active");
    sliderSRC.src = slider[currentSlider];
    currentSlider++;
  }, 3000);
};

const activeRadio = () => {
  radios.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      currentSlider = i;
      sliderSRC.src = slider[i];
      radios.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
};


var select = document.getElementById('userTypeSelect');
// Add a change event listener to the select element
select.addEventListener('change', function() {
  
  window.location.href = 'http://127.0.0.1:5501/login.html';
});

const App = () =>{
  activeRadio();
  repeat();
// Select elements
const userTypeSelect = document.getElementById('userTypeSelect');
const loginBtn = document.getElementById('loginBtn');
const scheduleBtn = document.getElementById('scheduleBtn');

// Disable the login button initially
loginBtn.disabled = true;

// Enable login button on dropdown selection
userTypeSelect.addEventListener('change', function() {
  loginBtn.disabled = false;
  // Redirect to login page after selection
  window.location.href = 'http://127.0.0.1:5501/login.html';
});

// Show blinking warning if login button is clicked without selection
loginBtn.addEventListener('click', function() {
  if (loginBtn.disabled) {
    loginBtn.classList.add('blink-warning');
    setTimeout(() => {
      loginBtn.classList.remove('blink-warning');
    }, 2000);
  } else {
    // Simulate login
    isLoggedIn = true; // Set to true after successful login
    alert('Đăng nhập thành công!');
  }
});

// Only allow schedule button to work if logged in
scheduleBtn.addEventListener('click', function(event) {
  if (!isLoggedIn) {
    event.preventDefault();
    alert('Bạn cần phải đăng nhập để đặt lịch hẹn.');
  }
});
};
App();