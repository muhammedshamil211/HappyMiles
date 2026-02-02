import { places } from "./data.js";
const headings = document.getElementsByClassName('place-head');
const home = document.getElementById('place-home');
const packageDiv = document.getElementById('packages-div');

export function setPackageDiv(name) {
    const place = places.find(p => p.name === name);
    console.log(home, place, headings);
    home.style.backgroundImage = `url("${place.image}")`;
    headings[0].innerText = name;
    headings[1].innerHTML = name;
    packageDiv.innerHTML = ''

    place.package.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `<div class = "image-class"><img src=${card.image}alt="">
            </div>
                <div class="package-detail">
                    <h3>${card.name}</h3>
                    <p><span class="day">${card.day[0]} DAY</span> <span class="day">${card.day[1]} NIGHT</span></p>
                    <p class="price">Starts from <span class="price-val"> $${card.price}</span></p>
                </div>`;

        packageDiv.appendChild(cardDiv);
    })

}

export function setDisplay(place, cat) {
    cat.innerHTML = '';
    place.forEach(place => {
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const div = document.createElement('div');

        img.src = place.image;
        h3.innerText = place.name;

        div.appendChild(img);
        div.appendChild(h3);

        div.addEventListener('click', () => {
            window.location.href = `location.html?place=${place.name}`;
        });
        cat.appendChild(div);
    });
}