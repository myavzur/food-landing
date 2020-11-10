import {getZero} from './timer';

function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slider = document.querySelector(container),
          sliderWindow = document.querySelector(wrapper),
          slidesField = document.querySelector(field), 
          slides = document.querySelectorAll(slide),

          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),

          width = window.getComputedStyle(sliderWindow).width;

    let sliderIndex = 1,
        offset = 0,

        currentSlide = document.querySelector(currentCounter),
        totalSlides = document.querySelector(totalCounter);

    const initializeSlider = () => {
        currentSlide.textContent = getZero(sliderIndex);
        totalSlides.textContent = getZero(slides.length);
    };
    initializeSlider();

    slides.forEach(slide => slide.style.width = width); 

    slidesField.style.cssText = `
        display: flex;
        transition: 0.5s;
        width: ${100 * slides.length}%;
    `; 

    sliderWindow.style.overflow = 'hidden';

    function deleteNotDigigts(str) {
        return +str.replace(/\D/g, '');
    }

    function changeDot() {
        dots.forEach((dot) => dot.classList.remove('dot_active'));
        dots[sliderIndex - 1].classList.add('dot_active');

        currentSlide.textContent = getZero(sliderIndex);

        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigigts(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigigts(width);
        }

        if (sliderIndex == slides.length) {
            sliderIndex = 1;
        } else {
            sliderIndex++;
        }

        changeDot();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigigts(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigigts(width);
        }

        if (sliderIndex == 1) {
            sliderIndex = slides.length;
        } else {
            sliderIndex--;
        }

        changeDot();
    });

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    sliderWindow.style.position = 'relative';
    sliderWindow.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');

        dot.setAttribute('data-dot', i + 1);

        dots.push(dot);
        indicators.append(dot);
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-dot');

            sliderIndex = slideTo;
            offset = deleteNotDigigts(width) * (slideTo - 1);

            changeDot();            
        });
    });
}

export default slider;