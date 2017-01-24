import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // user pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--visible');
    return false;
    // prevents browser from reloading (default behavior x-ed)
  }

  closeModal() {
    this.modal.removeClass('modal--visible');
  }
}

export default Modal;
