const itemSub = document.querySelector(`.mainNav__item--sub`);
const menuSub = itemSub.querySelector(`.mainNav__listSub`);

const toggleMenuSub = () => {
  menuSub.classList.toggle(`mainNav__listSub--visible`);
  if (!menuSub.classList.contains(`mainNav__listSub--visible`)) {
    document.removeEventListener(`click`, subItemOnClick);
  }
}

const subItemOnClick = (evt) => {
  evt.preventDefault();
  evt.stopImmediatePropagation();
  
  if (evt.target.classList.contains(`mainNav__link`) && !evt.target.classList.contains(`mainNav__link--sub`)) {
    toggleMenuSub()
    document.addEventListener(`click`, subItemOnClick);
  } else if (!evt.target.classList.contains(`mainNav__link--sub`)) {
    toggleMenuSub()
  } else {
    window.location = evt.target.href
  }
}

itemSub.addEventListener(`click`, subItemOnClick);