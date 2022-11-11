import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector("div.gallery");
const markupArr = [];
let markup = "";
galleryItems.forEach(photo => {
    const a = document.createElement("A")
    a.classList.add("gallery__item");
    a.href = photo.original;
    const img = document.createElement("IMG");
    img.classList.add("gallery__image");
    img.src = photo.preview;
    img.alt = photo.description;
    a.innerHTML = img.outerHTML;
    markupArr.push(a.outerHTML);
})
markup = markupArr.join("");
divGallery.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });