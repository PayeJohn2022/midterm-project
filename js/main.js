// Register Form Slide
function signup() {
    document.querySelector('.login-container').classList.add('hidden');
    document.querySelector('.register-container').classList.remove('hidden');
}

// Login Form Slide
function login() {
    document.querySelector('.register-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
}

// Register Form
function regAction(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const pass = document.getElementById('signupPass').value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passMinLength = 8;

    if (email == "admin@gmail.com" && pass == "admin"){
        window.alert("Successfully Registered!");
    } else if (!emailRegex.test(email)) {
        window.alert("Invalid email format!");
      return;
    } else if (pass.length < passMinLength) {
        window.alert(`Password must be at least ${passMinLength} characters long!`);
        return;
    } else {
        window.alert("Successfully registered!");
        document.querySelector('.register-container').classList.add('hidden');
        document.querySelector('.login-container').classList.remove('hidden');
    }
  } 

// Login Form
function logAction(e){
    e.preventDefault();
    const enterEmail = document.getElementById('loginEmail').value;
    const enterPass = document.getElementById('loginPass').value;

    if (enterEmail === "admin@gmail.com" && enterPass === "admin1234") {
            window.alert("Login successful!");
            window.location.href = "home.html"; 
        } else {
            window.alert("Invalid username or password!");
        }
}