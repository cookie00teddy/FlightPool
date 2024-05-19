const images = document.querySelectorAll('.slider img');
let currentImage = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
      image.classList.remove('next');
    } else {
      image.classList.remove('active');
      image.classList.add('next');
    }
  });
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

setInterval(nextImage, 3000);