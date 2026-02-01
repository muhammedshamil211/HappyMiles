
const internationalPlace = [
    {
        image: "https://www.usnews.com/object/image/00000180-6260-d187-a5cb-fefd67170001/eiffel-tower-outro-stock.jpg?update-time=1739908225595&size=responsive640",
        name: 'Paris'
    },
    {
        image: 'https://www.cdn.travejar.com/storage/tour_images/17453063400.webp',
        name: 'Dubai'
    },
    {
        image: "https://www.andamandaphuket.com/sites/andamanda/files/inline-images/thailand-tourist-attractions-4_0.jpg",
        name: "Thailand"
    },
    {
        image: "https://resize.indiatvnews.com/en/resize/gallery/1200_-/2025/03/1-1741160489.jpg",
        name: "Malaysia"

    }
];
const domestic = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITYt0lTeubyMKuFRcnr8lYMA44QE-exzDdQ&s',
        name: "Delhi"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40dAuljYvCH_6IoVUa-Tf7huR2jGpfEv2jg&s",
        name: "Manali"
    }
];

const domeDisp = document.getElementById('domestic-div');
const display = document.getElementById('place-div');
display.style.display = 'flex';
domeDisp.style.display = 'none';

function setDisplay(place, cat) {
    place.forEach(place => {
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        img.src = place.image;
        h3.innerText = place.name;
        div.appendChild(img);
        div.appendChild(h3);
        cat.appendChild(div);
    });
}
setDisplay(internationalPlace, display);
setDisplay(domestic, domeDisp);

function internationalDisplay() {
    domeDisp.style.display = 'none';
    display.style.display = 'flex';
}
function domesticDisplay() {
    display.style.display = 'none';
    domeDisp.style.display = 'flex';
}

