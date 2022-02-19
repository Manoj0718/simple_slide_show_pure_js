let images = [
  "https://cdn.pixabay.com/photo/2022/02/01/11/48/woman-6986050_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/10/31/08/34/animal-6756619__340.jpg",
  "https://cdn.pixabay.com/photo/2021/11/26/17/26/desert-6826299__340.jpg",
  "https://cdn.pixabay.com/photo/2022/02/14/08/53/woman-7012726__340.jpg",
];
let currentImage = 0;
let previewImage = document.querySelector(".image");
let previousButton = document.querySelector(".left");
let nextButton = document.getElementById("right");

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);
window.onload = function () {
  autoPlay();
};

function nextImage() {
  if (currentImage < images.length - 1) {
    currentImage++;
  } else {
    currentImage = 0;
  }
  previewImage.src = images[currentImage];
}

function previousImage() {
  if (currentImage > 0) {
    currentImage--;
  } else {
    currentImage = images.length - 1;
  }
  previewImage.src = images[currentImage];
  console.log("image src", images[currentImage]);
}

function autoPlay() {
  setInterval(nextImage, 5000);
}
