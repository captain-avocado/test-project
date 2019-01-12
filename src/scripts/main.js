import bodyScrollLock from 'body-scroll-lock';
import Glide from '@glidejs/glide';

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const modal = document.querySelector('.modal');
const targetElement = document.querySelector('.modal__content');
const modalImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalTextBlocks = document.querySelectorAll('.modal__text-block');
const modalValueTitle = document.querySelector('.modal__value-title');
const modalValueItems = document.querySelectorAll('.value-list__item');
const modalAdd = document.querySelector('.modal__add-block');
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
    modalValueTitle.classList.toggle('is-active');
  }, 800);
  
  modalValueItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.toggle('is-active');
    }, 800 + i * 100);
  });

  setTimeout(() => {
    modalAdd.classList.toggle('is-active');
  }, 600);

  setTimeout(() => {
    modalAddLeft.classList.toggle('is-active');
  }, 800);

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

new Glide('.glide', {
  // type: 'carousel',
  perView: 10,
  // gap: 40,
}).mount();

document.querySelectorAll('.tag-list__link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  });
});


