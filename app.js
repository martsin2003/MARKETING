let sliderContnet = document.querySelectorAll('.slider-content');
let index = 1;

let changeSlide = () => {
  console.log(index);
  sliderContnet.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
  index === sliderContnet.length - 1 ? (index = 0) : index++;
};

setInterval(() => changeSlide(), 8000);

console.log(sliderContnet);
