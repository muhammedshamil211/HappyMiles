import { setPackageDiv, setDisplay } from "./ui.js";
import { internationalPlace, domestic } from "./data.js";
import { internationalDisplay, domesticDisplay } from "./script.js";


const domeDisp = document.getElementById('domestic-div');
const display = document.getElementById('place-div');



display.style.display = 'flex';
domeDisp.style.display = 'none';

setDisplay(internationalPlace, display);
setDisplay(domestic, domeDisp);

if (display.style.display === 'flex') {
    document.getElementById('inter').focus();
}

document.getElementById('inter').addEventListener('click', e => {
    e.preventDefault();
    internationalDisplay();
});

document.getElementById('domes').addEventListener('click', e => {
    e.preventDefault();
    domesticDisplay();
});

const params = new URLSearchParams(window.location.search);
const placeName = params.get('place');

if (placeName) {
    setPackageDiv(placeName);

} else {
    setPackageDiv('Dubai');
}