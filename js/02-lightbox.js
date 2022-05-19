import { galleryItems } from './gallery-items.js';
// Change code below this line

// Search for ul.gallery element
const gallery = document.querySelector(".gallery");

// Create and render image tags according to the galleryItems data array and provided gallery item template
const markupsForGalleryItems = galleryItems
  .map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markupsForGalleryItems);

// Implementation of delegation on ul.gallery
gallery.addEventListener("click", (e) => e.preventDefault());

// Initialization of the SimpleLightbox library and adding displaying captions to images with the alt attribute
const zoomInWithNav = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Below is an additional code that changes the aesthetics of the modal

// Change the counter position so that it does not overlap the "go back" text below the modal
function changeCounterStylesInModal(modal) {
  const zoomInCounter = modal.domNodes.counter.style;
  zoomInCounter.top = "40px";
}

changeCounterStylesInModal(zoomInWithNav);