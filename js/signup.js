// GET ELEMENTS

let signupForm = document.getElementById("signupForm");

let fullName = document.getElementById("fullName");

let email = document.getElementById("email");

let phone = document.getElementById("phone");

let password = document.getElementById("password");

let confirmPassword =
    document.getElementById("confirmPassword");

let terms = document.getElementById("terms");

let formMessage = document.getElementById("formMessage");


// SHOW / HIDE PASSWORD

let toggleButtons =
    document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let targetId = button.dataset.target;

        let input = document.getElementById(targetId);

        if (input.type === "password") {

            input.type = "text";

            button.innerText = "Hide";

        } else {

            input.type = "password";

            button.innerText = "Show";

        }

    });

});


// SIGNUP FORM VALIDATION

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // GET VALUES

    let nameValue = fullName.value.trim();

    let emailValue = email.value.trim();

    let phoneValue = phone.value.trim();

    let passwordValue = password.value;

    let confirmValue = confirmPassword.value;


    // NAME VALIDATION

    if (nameValue.length < 3) {

        showMessage("Please enter a valid name.", "error");

        return;

    }


    // PHONE VALIDATION

    if (!/^[0-9]{10}$/.test(phoneValue)) {

        showMessage("Enter a valid 10-digit phone number.", "error");

        return;

    }


    // PASSWORD LENGTH

    if (passwordValue.length < 8) {

        showMessage("Password must contain at least 8 characters.", "error");

        return;

    }


    // PASSWORD MATCH

    if (passwordValue !== confirmValue) {

        showMessage("Passwords do not match!", "error");

        return;

    }


    // TERMS VALIDATION

    if (!terms.checked) {

        showMessage("Please accept Terms and Conditions.", "error");

        return;

    }


    // SUCCESS

    showMessage(
        "Account form submitted successfully! (Demo only)",
        "success"
    );

    signupForm.reset();

    toggleButtons.forEach(function(button) {

        button.innerText = "Show";

    });

});


// MESSAGE FUNCTION

function showMessage(message, type) {

    formMessage.innerText = message;

    if (type === "success") {

        formMessage.style.color = "#4ed9a0";

    } else {

        formMessage.style.color = "#ff647c";

    }

}


// MOBILE MENU

let menuBtn = document.getElementById("menuBtn");

let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("open");

});