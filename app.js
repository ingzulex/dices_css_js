// tackice

const jedan = document.querySelector('.t-1');
const dva = document.querySelector('.t-2');
const tri = document.querySelector('.t-3');
const cetiri = document.querySelector('.t-4');
const pet = document.querySelector('.t-5');
const sest = document.querySelector('.t-6');
const sedam = document.querySelector('.t-7');


function baciKocku() {
    let broj = Math.floor(Math.random() * 6) + 1;
    console.log(broj);
    if (broj === 1) {

        jedan.style.backgroundColor = 'white';
        dva.style.backgroundColor = 'white';
        tri.style.backgroundColor = 'white';
        cetiri.style.backgroundColor = 'white';
        pet.style.backgroundColor = 'red';
        sest.style.backgroundColor = 'white';
        sedam.style.backgroundColor = 'white';
    }
    if (broj === 2) {
        jedan.style.backgroundColor = 'red';
        dva.style.backgroundColor = 'white';
        tri.style.backgroundColor = 'white';
        cetiri.style.backgroundColor = 'white';
        pet.style.backgroundColor = 'white';
        sest.style.backgroundColor = 'white';
        sedam.style.backgroundColor = 'red';
    }
    if (broj === 3) {

        jedan.style.backgroundColor = 'red';
        dva.style.backgroundColor = 'white';
        tri.style.backgroundColor = 'white';
        cetiri.style.backgroundColor = 'white';
        pet.style.backgroundColor = 'red';
        sest.style.backgroundColor = 'white';
        sedam.style.backgroundColor = 'red';
    }
    if (broj === 4) {
        jedan.style.backgroundColor = 'red';
        dva.style.backgroundColor = 'red';
        tri.style.backgroundColor = 'white';
        cetiri.style.backgroundColor = 'white';
        pet.style.backgroundColor = 'white';
        sest.style.backgroundColor = 'red';
        sedam.style.backgroundColor = 'red';
    }
    if (broj === 5) {
        jedan.style.backgroundColor = 'red';
        dva.style.backgroundColor = 'red';
        tri.style.backgroundColor = 'white';
        cetiri.style.backgroundColor = 'white';
        pet.style.backgroundColor = 'red';
        sest.style.backgroundColor = 'red';
        sedam.style.backgroundColor = 'red';
    }
    if (broj === 6) {
        jedan.style.backgroundColor = 'red';
        dva.style.backgroundColor = 'red';
        tri.style.backgroundColor = 'red';
        cetiri.style.backgroundColor = 'red';
        pet.style.backgroundColor = 'white';
        sest.style.backgroundColor = 'red';
        sedam.style.backgroundColor = 'red';
    }
}

baciKocku();
// funkcija broja

// pauza 3 sek

// math.random 

// if broj kockice