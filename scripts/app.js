const monthly = document.querySelector('.outer');
const circle = document.querySelector('.inner');
const slider = document.querySelector('#slider');
const body = document.querySelector('body');
const cost = document.querySelector('.cost');
const views = document.querySelector('.views');

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
    switch (currentVal) {
        case '0':
            views.innerText = '10K';
            cost.innerText = '$8';
            break;
        case '1':
            views.innerText = '50K';
            cost.innerText = '$12';
            break;
        case '2':
            views.innerText = '100K';
            cost.innerText = '$16';
            break;
        case '3':
            views.innerText = '500k';
            cost.innerText = '$24';
            break;
        case '4':
            views.innerText = '1M';
            cost.innerText = '$36';
            break;
    }
}
