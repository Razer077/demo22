const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
var counter = 0;
const noSlider = slide.length;
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const buttons = document.querySelector('.buttons');
const family = document.querySelector('.family-tag');

console.log(`${noSlider}`);

right.addEventListener('click', () => {
    slide.forEach(element => {
        element.classList.remove('active');
    });
    counter++;
    if (counter >= noSlider) {
        counter = 0;
    }
    slide[counter].classList.add('active');
    console.log(`Counter: ${counter}`);
})

left.addEventListener('click', () => {
    slide.forEach(element => {
        element.classList.remove('active');
    });
    counter--;
    if (counter < 0) {
        counter = noSlider - 1;
    }
    slide[counter].classList.add('active');
    console.log(`Counter(prev): ${counter}`);
})

var autoplay;

let playing = () => {
    autoplay = setInterval(() => {
        slide.forEach(element => {
            element.classList.remove('active');
        });
        counter++;
        if (counter >= noSlider) {
            counter = 0;
        }
        slide[counter].classList.add('active');
        console.log(`Counter: ${counter}`);
    }, 4000)
}

playing();

slider.addEventListener('mouseover', () => {
    clearInterval(autoplay);
})

slider.addEventListener('mouseout', () => {
    playing();
})

buttons.addEventListener('mouseover', () => {
    clearInterval(autoplay);
})

buttons.addEventListener('mouseout', () => {
    playing();
})