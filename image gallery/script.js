const images = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
  'img/img6.jpg',
]

let currentIndex = 0;

function changeImage(index) {
  currentIndex = index;
  const mainImage = document.getElementById('main-image');
  mainImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(currentIndex);
}

