/* const openModal = document.querySelector("#open-modal"); */
const openModal = document.querySelectorAll("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

const toggleModal = () => {
  modal.classList.toggle("hide");
  overlay.classList.toggle("hide");
};

[...openModal, closeModal, overlay].forEach((el) => {
  el.addEventListener('click', () => toggleModal());
});