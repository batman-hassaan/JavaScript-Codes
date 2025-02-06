
const password = document.getElementById('password');
const background = document.getElementById('background');
const togglePassword = document.getElementById('togglePassword');


password.addEventListener('input', (e) => {
    const input = e.target.value;

    // Password validation criteria
    const hasLower = /[a-z]/.test(input);
    const hasUpper = /[A-Z]/.test(input);
    const hasNumber = /\d/.test(input);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(input);
    const isMinLength = input.length >= 8;

    // Calculate strength score (0 to 5)
    const strengthScore = hasLower + hasUpper + hasNumber + hasSpecialChar + (isMinLength ? 1 : 0);

    // Blur logic: Only reduce blur if password is at least 8 characters
    const maxBlur = 20;
    const blurValue = isMinLength ? maxBlur - (strengthScore * 4) : maxBlur;

    // Apply blur effect
    background.style.filter = `blur(${Math.max(blurValue, 0)}px)`;
});



togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.src = 'eyeopen.svg'; // Change back to open eye icon
    } else {
        password.type = 'password';
        togglePassword.src = 'eyeclose.svg'; // Change to closed eye icon
    }
});
