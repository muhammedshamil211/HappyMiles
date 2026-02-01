// Sign up logics
const users = JSON.parse(localStorage.getItem('userData')) || [];


// to store user details in local storage
function setToLocalStorage(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

// to clear input field
function clearInput(...ele) {
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
    } else {
        if (pass1 !== pass2) {
            warnS.innerText = `passwords not matching!`;
            warnS.style.color = 'red';
        } else {
            const user = {
                email,
                password: pass1
            }
            users.push(user);
            setToLocalStorage(users);
            console.log(users);
            warnS.innerText = `Sign Up successfully`;
            warnS.style.color = 'green';
        }
    }
}

const signUpForm = document.getElementById('mysignUp');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
});



// Login logics


const warn = document.getElementById('warn');


function openLogin() {
    document.getElementById('login').style.display = 'flex';
    document.getElementById('signUp').style.display = 'none';
}

function closeLogin() {
    document.getElementById('login').style.display = 'none';
}


window.onclick = function (e) {
    const popup = document.getElementById('login');
    const popupSign = this.document.getElementById('signUp');
    if (e.target === popup || e.target === popupSign) {
        popup.style.display = 'none';
        popupSign.style.display = 'none';
    }
}


function login() {
    const email = document.getElementById('log-email').value.trim();
    const pass = document.getElementById('log-pass').value.trim();

    const user = users.find(user => user.email.toLowerCase
        () === email.toLowerCase());
    if (!user) {
        warn.innerText = `User not Found`;
        warn.style.color = 'red';
    } else {
        if (user.password === pass) {
            warn.innerText = 'You loged in!';
            warn.style.color = 'green';
        } else {
            warn.innerText = 'Incorrect Password!';
            warn.style.color = 'red';
        }
    }

}

const form = document.getElementById('mylogin');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});



// menubar

// function menu() {
//     const m = document.getElementById('menu');

//     if (m.style.display === 'none') {
//         m.style.display = 'flex';
//     } else {
//         m.style.display = 'none';
//     }

// }