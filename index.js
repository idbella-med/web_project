let pass = document.getElementById("password")

function randompass() {
    let length = 16
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }
    pass.textContent = result
}