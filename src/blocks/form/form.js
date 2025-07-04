const form = document.querySelector(`.form`);
const inputs = form.querySelectorAll(`.form__input`);
const placeholders = form.querySelectorAll(`.form__placeholder`);

const inputOnChange = (evt) => {
  if (evt.target.value !== ``) {
    evt.target.nextElementSibling.classList.add(`form__placeholder--top`);
    } else {
    evt.target.nextElementSibling.classList.remove('form__placeholder--top');
  }
};

inputs.forEach((input) => {
  input.addEventListener(`input`, inputOnChange);
})