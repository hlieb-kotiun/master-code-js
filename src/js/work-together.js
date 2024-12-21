const modal = document.querySelector('.footer-modal');
const backdrop = document.querySelector('.footer-backdrop');
const closeModalButton = document.querySelector('.modal-close-btn');

function openModal() {
  modal.classList.add('is-open');
  backdrop.classList.add('is-open');
}
function closeModal() {
  modal.classList.remove('is-open');
  backdrop.classList.remove('is-open');
}
closeModalButton.addEventListener('click', closeModal);
// openModal();
