const image = document.querySelector("#alpha-child");
const imageContainer = document.querySelector(".image-container");

const button = document.querySelector(".autosomal-recessive");
const closeButton = document.querySelector("#alpha-child-close");

button.addEventListener('click', showImage);
closeButton.addEventListener('click', closeImage)

function showImage(){
    imageContainer.style.visibility = 'visible';
}

function closeImage(){
    imageContainer.style.visibility = 'hidden';
}