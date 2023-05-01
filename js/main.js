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
function addData(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const pass = document.getElementById('signupPass').value;

    if (email !== "admin@gmail.com") {
        window.alert("Invalid email format!");
        return;
    }
    if (pass !== "admin") {
        window.alert(`Password must be at least 8 characters long!`);
        return;
    }
    window.alert("Successfully registered!");
    window.location.href = "#";
}


// Login Form
function checkData(e){
    e.preventDefault();
    const enterEmail = document.getElementById('loginEmail').value;
    const enterPass = document.getElementById('loginPass').value;

    if (enterEmail === "admin@gmail.com" && enterPass === "admin") {
        window.alert("Login successful!");
        window.location.href = "home.html"; 
    } else {
        window.alert("Invalid username or password!");
    }
}
