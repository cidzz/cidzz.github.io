const validUsername = "abdul";
const validPassword = "abdul123";

const errorMessage = document.getElementById('errorMessage');

function hideErrorMessage(){errorMessage.style.display = 'none'}

document.getElementById('username').addEventListener('input', hideErrorMessage);
document.getElementById('password').addEventListener('input', hideErrorMessage);

    document.getElementById('loginForm').addEventListener('submit', function(event) {        
        event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === validUsername && password === validPassword) {
        window.location.href = 'UTAMA.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        errorMessage.style.display = 'block';
    }
});