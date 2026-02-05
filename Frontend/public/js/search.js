import { places } from "./data.js";

const button = document.getElementById('search-btn');
const input = document.getElementById('search-input');
const dis = document.getElementById('search-result')

function search() {
    // first clear previous
    dis.innerHTML = '';

    // get the search key
    const key = input.value.trim().toLowerCase();

    // check there is any place starts with that prefix
    const placeList = places.filter((place) => place.name.toLowerCase().startsWith(key));

    // if no place show an error message
    if (!placeList) {
        dis.style.display = 'none'
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

input.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        search();
    }
})

// to cancel the result div . make the display
document.getElementById('content-div').addEventListener('click', () => {
    dis.style.display = 'none'
})



button.addEventListener('click', (e) => {
    e.stopPropagation();
    search();
});