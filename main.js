let loginBlock = document.getElementById('login');
let homeBlock = document.getElementById('home');
let username = document.getElementById('username');
let login = false;
let home = false;

let user = 'admin';

if (!login) {
    loginBlock.style.display = 'none';
} else {
    loginBlock.style.display = 'block';
}

if (!home) {
    homeBlock.style.display = 'none'
}

function loginf() {
    login = true;   
    loginBlock.style.display = 'block';
}

function loginUSer() {
    if (username.value === user) {
        home = true;
        loginBlock.style.display = 'none';
        homeBlock.style.display = 'block'

        
    } else {
        alert('wrong')
    }
}
