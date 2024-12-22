import iziToast from 'izitoast';

  const API_URL = 'https://portfolio-js.b.goit.study/api/requests';
  const form = document.querySelector('.contact-form');
  const emailInput = document.querySelector('.footer-input');
  const messageInput = document.querySelector('.footer-textarea');
  const modalWindow = document.querySelector('.footer-modal');
  const modalCloseButton = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.footer-backdrop');

  async function postRequest(options) {
    try {
      const response = await fetch(API_URL, options);
      if (!response.ok) throw new Error('Not found');
      return await response.json();
    } catch (error) {
      console.error('Error during post request:', error);
      throw error;
    }
  }

  function openModal() {
    modalWindow.classList.add('is-open');
    backdrop.classList.add('is-open');
  }

  function closeModal() {
    modalWindow.classList.remove('is-open');
    backdrop.classList.remove('is-open');
  }

  modalCloseButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
  modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow) closeModal();
  });

  function validateEmail(email) {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email.toLowerCase());
  }

  function validateEmailInput(input) {
    removeMessage(input);
    const email = input.value;
    const isValid = validateEmail(email);
    const message = isValid ? 'Success!' : 'Invalid email, try again';
    const type = isValid ? 'success' : 'error';
    addMessage(input, message, type);
  }

  function addMessage(input, text, type) {
    const messageElement = document.createElement('label');
    messageElement.textContent = text;
    messageElement.className =
      type === 'success' ? 'success-label' : 'error-label';
    input.insertAdjacentElement('afterend', messageElement);
  }

  function removeMessage(input) {
    const messageLabel = input.parentNode.querySelector('label');
    if (messageLabel) messageLabel.remove();
  }

  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }

  messageInput.addEventListener('change', () => {
    messageInput.value = truncateText(messageInput.value, 20);
  });

  function showServerError() {
    iziToast.show({
      color: 'red',
      message: 'ERROR SERVER',
      position: 'topCenter',
    });
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const comment = messageInput.value.trim();

    if (validateEmail(email) && comment) {
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, comment }),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      };

      try {
        await postRequest(options);
        openModal();
        form.reset();
      } catch {
        showServerError();
      }
    } else {
      iziToast.show({
        color: 'red',
        message: 'All form fields must be filled in',
        position: 'topCenter',
      });
    }

    removeMessage(emailInput);
  });

  emailInput.addEventListener('change', () => {
    validateEmailInput(emailInput);
  });

