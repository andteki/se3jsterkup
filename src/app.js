/*
* File: app.js
* Author: Sallai András
* Copyright: 2022, Sallai András
* Group: Szoft I E 1/3
* Date: 2022-03-29
* Github: https://github.com/andteki/
* Licenc: GNU GPL
*/

const radiusElem = document.querySelector('#radius');
const heightElem = document.querySelector('#height');
const bulkElem = document.querySelector('#bulk');
const calcBulk = document.querySelector('#calcBulk');

calcBulk.addEventListener('click', () => {
    let radius = Number(radiusElem.value);
    let height = Number(heightElem.value);
    let bulk = (1/3) * Math.pow(radius, 2) *
    Math.PI * height;
    console.log(bulk.toFixed(2))
    bulkElem.value = bulk.toFixed(2);
});
