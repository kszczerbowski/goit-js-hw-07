import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector("div.gallery");
const markupArr = [];
let markup = "";
galleryItems.forEach(photo => {
    const a = document.createElement("A")
    a.classList.add("gallery__link");
    a.href = photo.original;
    const img = document.createElement("IMG");
    img.classList.add("gallery__image");
    img.src = photo.preview;
    img.alt = photo.description;
    img.dataset.source = photo.original;
    a.innerHTML = img.outerHTML;
    markupArr.push(a.outerHTML);
})
let instance;
divGallery.addEventListener("click", (event) => {
    if (event.target.nodeName !== "IMG") return;
    event.preventDefault();
    const origPhotoDir = event.target.dataset.source;
    instance = basicLightbox.create(`
    <img src=${origPhotoDir} width="800" height="600">
    `)
    instance.show()
})
document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    instance.close();
  });

markup = markupArr.join("");
divGallery.innerHTML = markup;