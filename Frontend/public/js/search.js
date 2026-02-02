import { places } from "./data.js";

const button = document.getElementById('search-btn');
const input = document.getElementById('search-input');

function search(){
    const place = places.find((p) => p.name == input.value.trim());

    if(!place){
        
    }
}