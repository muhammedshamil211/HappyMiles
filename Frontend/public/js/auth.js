// Sign up logics
export const users = JSON.parse(localStorage.getItem('userData')) || [];


// to store user details in local storage
export function setToLocalStorage(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

// to clear input field
export function clearInput(...ele) {
    ele.forEach(e => {
        document.getElementById(e).value = '';
    });
}

const warnS = document.getElementById('warn-s');


function openSignUp() {
    document.getElementById('signUp').style.display = 'flex';
    document.getElementById('login').style.display = 'none';
}
function closeSignUp() {
    document.getElementById('signUp').style.display = 'none';
}


// Sign up function store new user data
function signUp() {
    const email = document.getElementById('email').value.trim();
    const pass1 = document.getElementById('pass').value.trim();
    const pass2 = document.getElementById('re-pass').value.trim();

    clearInput('email', 'pass', 're-pass');

    const userExist = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    console.log(userExist);

    if (userExist) {
        warnS.innerText = `user already exist.please go to login!`;
        warnS.style.color = 'red';
        return;
    }
    if (pass1 !== pass2) {
        warnS.innerText = `passwords not matching!`;
        warnS.style.color = 'red';
        return
    }
    users.push({ email, password: pass1 });
    setToLocalStorage(users);

    warnS.innerText = `Sign Up successfully`;
    warnS.style.color = 'green';

}






// Login logics

const warn = document.getElementById('warn');


function openLogin() {
    document.getElementById('login').style.display = 'flex';
    document.getElementById('signUp').style.display = 'none';
}

function closeLogin() {
    document.getElementById('login').style.display = 'none';
}

function login() {
    const email = document.getElementById('log-email').value.trim();
    const pass = document.getElementById('log-pass').value.trim();

    const user = users.find(user => user.email.toLowerCase
        () === email.toLowerCase());
    if (!user) {
        warn.innerText = `User not Found`;
        warn.style.color = 'red';
        return;
    }
    if (user.password === pass) {
        warn.innerText = 'You loged in!';
        warn.style.color = 'green';
    } else {
        warn.innerText = 'Incorrect Password!';
        warn.style.color = 'red';
    }
}

// menubar
let menuOpen = false;

function menu() {
    const m = document.getElementById('menu');
    if (!m) return;

    m.style.display = menuOpen ? 'none' : 'flex';
    menuOpen = !menuOpen;

}
if (window.innerWidth < 681){
    const m = document.getElementById('menu').style.direction = 'none'; 
}

    // Outside the screen to close the form
    window.onclick = function (e) {
        const popup = document.getElementById('login');
        const popupSign = this.document.getElementById('signUp');

        if (e.target === popup || e.target === popupSign) {
            popup.style.display = 'none';
            popupSign.style.display = 'none';
        }
    };

// prevent default reloading when submit
document.getElementById('mysignUp').addEventListener('submit', (event) => {
    event.preventDefault();
});

document.getElementById('mylogin').addEventListener('submit', (event) => {
    event.preventDefault();
});



document.getElementById('sign-btn').addEventListener('click', openSignUp);
document.getElementById('sign-btn3').addEventListener('click', openSignUp);
document.getElementById('close1').addEventListener('click', closeLogin);

document.getElementById('sign-btn1').addEventListener('click', e => {
    e.preventDefault();
    openSignUp();
});
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('close2').addEventListener('click', closeSignUp);
document.getElementById('signUp-btn').addEventListener('click', signUp);
document.getElementById('login-a').addEventListener('click', e => {
    e.preventDefault();
    openLogin();
});
document.getElementById('menu-bar').addEventListener('click', menu);

