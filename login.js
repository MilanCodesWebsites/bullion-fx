// Initialize Lucide icons
lucide.createIcons();

// Password visibility toggle
const loginPasswordInput = document.getElementById('loginPassword');
const loginPasswordToggle = document.getElementById('loginPasswordToggle');
const loginPasswordIcon = loginPasswordToggle.querySelector('i');

loginPasswordToggle.addEventListener('click', function() {
    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text';
        loginPasswordIcon.setAttribute('data-lucide', 'eye-off');
    } else {
        loginPasswordInput.type = 'password';
        loginPasswordIcon.setAttribute('data-lucide', 'eye');
    }
    lucide.createIcons();
});
