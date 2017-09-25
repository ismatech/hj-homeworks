'use strict';
const doc = document;
const photos = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg','i/IAC.jpg','i/new-museum.jpg'];
const currentPhoto = doc.getElementById('currentPhoto');
const nextButton = doc.getElementById('nextPhoto');
const prevButton = doc.getElementById('prevPhoto');

let step = 0;
nextButton.onclick = function () {
  
  if (step === photos.length) {
      step = 0;
  }
  currentPhoto.src = photos[step];
  step++;

}
prevButton.onclick = function () {
    if (step <= -1) {
        step = photos.length - 1;
    }
    currentPhoto.src = photos[step];
    step--;
}