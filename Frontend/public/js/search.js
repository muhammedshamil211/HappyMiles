import { places } from "./data.js";

const button = document.getElementById('search-btn');
const input = document.getElementById('search-input');
const dis = document.getElementById('search-result')

function search() {
    // first clear previous
    dis.innerHTML = '';
    dis.style.display = 'none';

    // get the search key
    const key = input.value.trim().toLowerCase();

    if (!key) {
        return;
    }

    // check there is any place starts with that prefix
    const placeList = places.filter((place) => place.name.toLowerCase().startsWith(key));

    // if no place show an error message
    if (placeList.length == 0) {
        // dis.innerHTML = `<p>No such place!</p>`;
        // dis.style.display = 'none';
        return;
    }



    //if any place in it .then add the places into the result div
    placeList.forEach(place => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${place.name}</p>`;

        div.addEventListener('click', () => {
            window.location.href = `location.html?place=${place.name}`;
        });
        dis.appendChild(div);
    });
    dis.style.display = 'flex';
}

function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

const sear = debounce(search, 300);

input.addEventListener('keyup', sear);

// input.addEventListener("keydown", function (event) {
//     if (event.key === 'Enter') {
//         search();
//     }
// })

// to cancel the result div . make the display
document.getElementById('content-div').addEventListener('click', () => {
    dis.style.display = 'none'
})



button.addEventListener('click', (e) => {
    e.stopPropagation();
    search();
});