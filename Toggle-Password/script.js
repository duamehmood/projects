
const password = document.getElementById('password');
const toggleBtn = document.getElementById('toggleBtn');
const icon = document.getElementById('icon');

toggleBtn.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
