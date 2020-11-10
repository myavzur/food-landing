require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill'; 

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 10000);
    
    tabs('.tabheader__items', '.tabheader__item','.tabcontent', 'tabheader__item_active');
    modal('[data-modalBtn]', '.modal', modalTimerId);
    timer('.timer', '2021-01-01 00:00');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider-inner',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'
    });
});