import { internationalPlace, domestic,places } from "./data.js";
import { setDisplay } from "./ui.js";

const domeDisp = document.getElementById('domestic-div');
const display = document.getElementById('place-div');

display.style.display = 'flex';
domeDisp.style.display = 'none';

setDisplay(internationalPlace, display);
setDisplay(domestic, domeDisp);

export function internationalDisplay() {
    domeDisp.style.display = 'none';
    display.style.display = 'flex';
}
export function domesticDisplay() {
    display.style.display = 'none';
    domeDisp.style.display = 'flex';
}

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
