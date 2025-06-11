const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginSubmit = document.getElementById("loginSubmit");
const registerSubmit = document.getElementById("registerSubmit");

function validateLoginForm() {
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    loginSubmit.disabled = !(username && password);
}

// Add input event listeners to login fields
loginUsername.addEventListener('input', validateLoginForm);
loginPassword.addEventListener('input', validateLoginForm);

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const responsePromise = fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: loginUsername.value,
            password: loginPassword.value
        })
    });
    const response = await responsePromise;
    const data = await response.json();
    if (response.status === 404) {
        loginMessage.textContent = data.message;
    } else if (response.status === 401) {
        loginMessage.textContent = data.message;
    } else {
        loginMessage.textContent = data.message;
    }
});

function validateRegisterForm() {
    const first = firstname.value.trim();
    const last = lastname.value.trim();
    const emailVal = email.value.trim();
    const user = username.value.trim();
    const pass = password.value.trim();
    registerSubmit.disabled = !(first && last && emailVal && user && pass);
}

// Add input event listeners to register fields
firstname.addEventListener('input', validateRegisterForm);
lastname.addEventListener('input', validateRegisterForm);
email.addEventListener('input', validateRegisterForm);
username.addEventListener('input', validateRegisterForm);
password.addEventListener('input', validateRegisterForm);

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const responsePromise = fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first_name: firstname.value,
            last_name: lastname.value,
            email: email.value,
            username: username.value,
            password: password.value
        })
    });
    const response = await responsePromise;
    const data = await response.json();
    if (response.status === 400) {
        registerMessage.textContent = data.message;
    } else {
        registerMessage.textContent = data.message;
    }
});

// Attach form event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    validateLoginForm();
    validateRegisterForm();

    // Login form submission handler
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const responsePromise = fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: loginUsername.value,
                password: loginPassword.value
            })
        });
        const response = await responsePromise;
        const data = await response.json();
        if (response.status === 404) {
            loginMessage.textContent = data.message;
        } else if (response.status === 401) {
            loginMessage.textContent = data.message;
        } else {
            loginMessage.textContent = data.message;
        }
    });

    // Register form submission handler
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const responsePromise = fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: firstname.value,
                last_name: lastname.value,
                email: email.value,
                username: username.value,
                password: password.value
            })
        });
        const response = await responsePromise;
        const data = await response.json();
        if (response.status === 400) {
            registerMessage.textContent = data.message;
        } else {
            registerMessage.textContent = data.message;
        }
    });
});
