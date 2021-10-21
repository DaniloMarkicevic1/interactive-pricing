const monthly = document.querySelector('.outer');
const circle = document.querySelector('.inner');
const slider = document.querySelector('#slider');
const body = document.querySelector('body');

const cost = document.querySelector('.cost');

monthly.addEventListener('click', (e) => {
    console.log(e.target.classList[1]);
    if (circle.classList[1] === 'zero') {
        circle.classList.replace('zero', 'one');
        monthly.classList.add('activeBg');
    } else {
        circle.classList.replace('one', 'zero');
        monthly.classList.remove('activeBg');
    }
});
function myFunction() {
    const x = document.querySelector('#slider');
    const defaultVal = x.defaultValue;
    const currentVal = x.value;
    console.log(x);
    console.log(defaultVal);
    console.log(currentVal);
}
