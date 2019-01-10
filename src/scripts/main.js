import bodyScrollLock from 'body-scroll-lock';

// const bodyScrollLock = require('body-scroll-lock');

// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const modal = document.querySelector('.modal');
const targetElement = document.querySelector('.modal__content');
const modalImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalTextBlocks = document.querySelectorAll('.modal__text-block');
const modalValue = document.querySelector('.modal__value');
const modalAddLeft = document.querySelector('.modal__add-left');

const triggers = document.querySelectorAll('.modal-trigger');

function toggleModal() {
  modal.classList.toggle('is-active');
  setTimeout(() => {
    modalImg.classList.toggle('is-active');
  }, 200);
  setTimeout(() => {
    modalTitle.classList.toggle('is-active');
  }, 200);

  setTimeout(() => {
    modalTextBlocks[0].classList.toggle('is-active');
  }, 400);
  setTimeout(() => {
    modalTextBlocks[1].classList.toggle('is-active');
  }, 600);
  setTimeout(() => {
    modalValue.classList.toggle('is-active');
  }, 800);

  setTimeout(() => {
    modalAddLeft.classList.toggle('is-active');
  }, 600);

  if (modal.classList.contains('is-active')) {
    disableBodyScroll(targetElement);
  } else {
    enableBodyScroll(targetElement);
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

triggers.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal();
  });
});

window.addEventListener('click', windowOnClick);

