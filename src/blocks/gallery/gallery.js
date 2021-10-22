const gallery = document.querySelector(`.gallery`);
const images = gallery.querySelectorAll(`.gallery__img`);
const overlay = document.querySelector(`.overlay`);

const openImg = (img, index) => {
  console.log(img.parentElement.childElementCount);
  overlay.classList.toggle(`overlay--visible`);
  const newImg = img.cloneNode();
  overlay.appendChild(newImg);
  const overlayImg = overlay.querySelector(`.gallery__img`);
  overlayImg.classList.toggle(`gallery__img--view`);
  overlay.addEventListener(`click`, closeImg);
};

const closeImg = () => {
  overlay.classList.remove(`overlay--visible`);
  overlay.removeEventListener(`click`, closeImg);
  overlay.innerHTML = ``;
};

const nextImg = () => {
  // TODO
};

const prevImg = () => {
  // TODO
};

images.forEach((img) => {
  img.addEventListener(`click`, (evt) => {
    openImg(evt.target, parseInt(evt.target.dataset.imgIndex));
  });
});