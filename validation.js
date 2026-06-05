// ==========================================
// Part 2: Client-Side Validation
// ==========================================

const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const termsCheckbox = document.getElementById('terms');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const termsError = document.getElementById('termsError');

signupForm.addEventListener('submit', function(event) {
    // Halt automatic tab reloads
    event.preventDefault();

    // Reset error text styles and inputs borders
    resetValidationState();

    let isValid = true;

    // 1. Evaluate empty input for Username
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameInput.style.borderColor = "red";
        isValid = false;
    }

    // 2. Evaluate empty and match email strings against criteria regex
    // Provided standard pattern: /^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/
    const emailRegex = /^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailInput.style.borderColor = "red";
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.style.borderColor = "red";
        isValid = false;
    }

    // 3. Enforce an 8-character rule on passwords
    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.style.borderColor = "red";
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        passwordInput.style.borderColor = "red";
        isValid = false;
    }

    // 4. Terms Checkbox Validation
    if (!termsCheckbox.checked) {
        termsError.textContent = "You must accept the terms and conditions.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        signupForm.reset();
    }
});

function resetValidationState() {
    const errorSpans = [usernameError, emailError, passwordError, termsError];
    const inputs = [usernameInput, emailInput, passwordInput];

    errorSpans.forEach(span => span.textContent = "");
    inputs.forEach(input => input.style.borderColor = "#ccc");
}


// ==========================================
// Part 3: Timing Events (setTimeout and setInterval)
// ==========================================

const resendBtn = document.getElementById('resendBtn');
let countdownTime = 10;

// Implement a setInterval loop that ticks down from 10 to 0 seconds
const countdownInterval = setInterval(function() {
    countdownTime--;
    
    // Dynamically editing the button text every 1000ms
    resendBtn.textContent = `Resend Verification (${countdownTime}s)`;
    
    // Once zero is reached, invoke clearInterval to kill cycle and strip disabled constraint
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        resendBtn.textContent = "Resend Verification";
        resendBtn.removeAttribute('disabled');
    }
}, 1000);