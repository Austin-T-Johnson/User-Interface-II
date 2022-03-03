/* variables */

const fever333 = document.getElementById('fvr333btn');
const fever333_container = document.getElementById('fvr_container');
const fvrclose = document.getElementById('fvr333');

const ca = document.getElementById('ca-btn');
const caContainer = document.getElementById('ca_container');
const caClose = document.getElementById('ca-pic');

const bh = document.getElementById('bh-btn');
const bhContainer = document.getElementById('bh_container');
const bhClose = document.getElementById('bh-pic');

const sf = document.getElementById('sf-btn');
const sfContainer = document.getElementById('sf_container');
const sfClose = document.getElementById('sf-pic');

/* event listeners */

fever333.addEventListener('click', () => {
    fever333_container.classList.add('show');
});

fvrclose.addEventListener('click', () => {
    fever333_container.classList.remove('show');
});

ca.addEventListener('click', () => {
    caContainer.classList.add('show');
});

caClose.addEventListener('click', () => {
    caContainer.classList.remove('show');
})

bh.addEventListener('click', () => {
    bhContainer.classList.add('show');
});

bhClose.addEventListener('click', () => {
    bhContainer.classList.remove('show');
})

sf.addEventListener('click', () => {
    sfContainer.classList.add('show');
});

sfClose.addEventListener('click', () => {
    sfContainer.classList.remove('show');
});