import { galleryItems } from './gallery-items.js';
// Change code below this line

// Search for div.gallery element
const gallery = document.querySelector(".gallery");

// Create and render image tags according to the galleryItems data array and provided gallery item template
const markupsForGalleryItems = galleryItems
  .map(({preview, original, description}) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markupsForGalleryItems);

// Implementation of delegation on div.gallery
gallery.addEventListener("click", zoomIn);

// Function for opening a modal window with original picture size after clicking on a preview item in the gallery
function zoomIn(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  };

  const modalWithOriginalPicture = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
  `);
  modalWithOriginalPicture.show();

  closingWithEscapeKey(modalWithOriginalPicture);
};

// The function closes the modal window after pressing the Escape key
function closingWithEscapeKey(modal) {
  if (modal.visible() === true) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.close();
      };
    });
  };
};