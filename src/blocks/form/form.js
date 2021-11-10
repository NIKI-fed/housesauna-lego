const form = document.querySelector(`.form`);
const inputs = form.querySelectorAll(`.form__input`);
const placeholders = form.querySelectorAll(`.form__placeholder`);

const inputOnChange = (evt) => {
  if (evt.target.value != ``) {
    evt.target.nextElementSibling.classList.toggle(`form__placeholder--top`);
  } else {
    evt.target.nextElementSibling.classList.toggle(`form__placeholder--top`);
  }
};

inputs.forEach((input) => {
  input.addEventListener(`change`, inputOnChange);
})